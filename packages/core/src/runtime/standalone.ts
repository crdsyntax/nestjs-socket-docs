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
    this.jsonPath = options.jsonPath || '/socket-docs/json';
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
      const fullUrl = req.url || '/';
      const [urlPath] = fullUrl.split('?');
      
      // Normalize paths for comparison (remove trailing slashes)
      const normalize = (p: string) => p === '/' ? p : p.replace(/\/+$/, '');
      const reqPath = normalize(urlPath);
      const jsonPath = normalize(this.jsonPath);

      console.log(`[SocketDocs] [Standalone] ${req.method} ${urlPath} -> Mapping: ${reqPath}`);

      // 1. Serve JSON schema (Highest priority)
      if (reqPath === jsonPath || reqPath === '/json' || reqPath === '/socket-docs/json') {
        console.log(`[SocketDocs] [Standalone] Serving schema...`);
        res.writeHead(200, { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        });
        res.end(JSON.stringify(this.schema));
        return;
      }

      // 2. Try to serve as a static file from uiDistPath
      if (reqPath !== '/') {
        const filePath = path.join(uiDistPath, urlPath);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath);
          res.writeHead(200, { 'Content-Type': this.getContentType(ext) });
          res.end(fs.readFileSync(filePath));
          return;
        }
      }

      // 3. Serve UI Index (Fallback for SPA routing)
      const indexPath = path.join(uiDistPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        let content = fs.readFileSync(indexPath, 'utf-8');
        
        const configScript = `
          <script>
            window.SOCKET_DOCS_CONFIG = {
              api: {
                jsonPath: '${this.jsonPath}'
              }
            };
          </script>
        `;
        content = content.replace(/<head>/i, `<head>${configScript}`);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      } else {
        console.error(`[SocketDocs] [Standalone] UI not found at: ${indexPath}`);
        res.writeHead(404);
        res.end(`UI not found at ${indexPath}. Build the UI package first.`);
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
