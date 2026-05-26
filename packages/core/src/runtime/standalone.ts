import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { SocketDocsSchema } from '../interfaces/schema.interface';

export interface StandaloneOptions {
  port?: number;
  jsonPath?: string;
}

/**
 * Standalone server for development purposes.
 * It serves the UI at the root and the JSON schema at /json.
 */
export class StandaloneServer {
  private server: http.Server | null = null;
  private readonly port: number;
  private readonly jsonPath: string;

  constructor(private schema: SocketDocsSchema, options: StandaloneOptions = {}) {
    this.port = options.port || 3001;
    this.jsonPath = options.jsonPath || '/json';
  }

  /**
   * Update the schema being served.
   */
  updateSchema(newSchema: SocketDocsSchema): void {
    this.schema = newSchema;
    console.log(`[SocketDocs] 🔄 Schema updated`);
  }

  start(): void {
    // Relative to dist/runtime/standalone.js
    const uiDistPath = path.resolve(__dirname, '../../ui-dist');

    this.server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
      const url = req.url || '/';
      console.log(`[SocketDocs] [Standalone] ${req.method} ${url}`);

      // Serve JSON schema
      if (url === this.jsonPath) {
        console.log(`[SocketDocs] [Standalone] Serving schema...`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(this.schema));
        return;
      }

      // Serve assets
      if (url.startsWith('/assets/')) {
        const assetFile = url.replace('/assets/', '');
        const filePath = path.join(uiDistPath, 'assets', assetFile);
        
        if (fs.existsSync(filePath)) {
          const ext = path.extname(filePath);
          const contentType = this.getContentType(ext);
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(fs.readFileSync(filePath));
        } else {
          res.writeHead(404);
          res.end('Asset not found');
        }
        return;
      }

      // Serve UI Index
      const indexPath = path.join(uiDistPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        let content = fs.readFileSync(indexPath, 'utf-8');
        
        // Inject Standalone Configuration
        // The UI uses SOCKET_DOCS_CONFIG to override default settings
        const configScript = `
          <script>
            window.SOCKET_DOCS_CONFIG = {
              api: {
                jsonPath: '${this.jsonPath}'
              }
            };
          </script>
        `;
        content = content.replace('<head>', `<head>${configScript}`);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      } else {
        res.writeHead(404);
        res.end('UI not found. Build the UI package first.');
      }
    });

    this.server.listen(this.port, () => {
      console.log(`\n[SocketDocs] 🚀 Standalone Development Server`);
      console.log(`[SocketDocs] URL: http://localhost:${this.port}`);
      console.log(`[SocketDocs] Mode: Standalone (Dev)\n`);
    });
  }

  private getContentType(ext: string): string {
    switch (ext) {
      case '.js': return 'application/javascript';
      case '.css': return 'text/css';
      case '.html': return 'text/html';
      case '.json': return 'application/json';
      case '.png': return 'image/png';
      case '.jpg': return 'image/jpeg';
      case '.svg': return 'image/svg+xml';
      default: return 'application/octet-stream';
    }
  }

  stop(): void {
    this.server?.close();
  }
}
