"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandaloneServer = void 0;
const http = __importStar(require("http"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * Standalone server for development purposes.
 * It serves the UI at the root and the JSON schema at /json.
 */
class StandaloneServer {
    schema;
    server = null;
    port;
    jsonPath;
    constructor(schema, options = {}) {
        this.schema = schema;
        this.port = options.port || 3001;
        this.jsonPath = options.jsonPath || '/socket-docs/json';
    }
    /**
     * Update the schema being served.
     */
    updateSchema(newSchema) {
        this.schema = newSchema;
        console.log(`[SocketDocs] 🔄 Schema updated`);
    }
    start() {
        // Relative to dist/runtime/standalone.js
        const uiDistPath = path.resolve(__dirname, '../../ui-dist');
        this.server = http.createServer((req, res) => {
            const fullUrl = req.url || '/';
            const [urlPath] = fullUrl.split('?');
            // Normalize paths for comparison (remove trailing slashes)
            const normalize = (p) => p === '/' ? p : p.replace(/\/+$/, '');
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
            }
            else {
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
    getContentType(ext) {
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
    stop() {
        this.server?.close();
    }
}
exports.StandaloneServer = StandaloneServer;
//# sourceMappingURL=standalone.js.map