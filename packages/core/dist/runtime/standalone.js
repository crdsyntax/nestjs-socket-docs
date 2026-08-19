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
 * Common development ports where NestJS / Node servers usually run.
 */
const DEFAULT_DISCOVERY_PORTS = [
    3000, 3001, 3002, 3003, 3004, 3005, 3010,
    4000, 4001,
    5000, 5001,
    7000, 7001,
    8000, 8080, 8081, 8082,
    9000, 9001,
    3333, 4200, 5173, 5500,
];
const DISCOVERY_TIMEOUT_MS = 900;
const DISCOVERY_JSON_PATHS = ['/socket-docs/json', '/json'];
/**
 * Standalone server for development purposes.
 * It serves the UI at the root and the JSON schema at /json.
 */
class StandaloneServer {
    schema;
    server = null;
    port;
    jsonPath;
    uiDistPath;
    discoveryEnabled;
    discoveryPorts;
    constructor(schema, options = {}) {
        this.schema = schema;
        this.port = options.port || 3001;
        this.jsonPath = options.jsonPath || '/socket-docs/json';
        // Relative to dist/runtime/standalone.js
        this.uiDistPath = path.resolve(__dirname, '../../ui-dist');
        this.discoveryEnabled = options.discovery ?? true;
        this.discoveryPorts = options.discoveryPorts ?? DEFAULT_DISCOVERY_PORTS;
    }
    /**
     * Update the schema being served.
     */
    updateSchema(newSchema) {
        this.schema = newSchema;
        console.log(`[SocketDocs] 🔄 Schema updated`);
    }
    /**
     * Sanitize and resolve a URL path to prevent path traversal attacks.
     * Returns null if the resolved path is outside the allowed directory.
     */
    sanitizePath(urlPath, baseDir) {
        // Decode URL-encoded characters and normalize
        const decoded = decodeURIComponent(urlPath);
        // Remove null bytes and other potentially dangerous characters
        const sanitized = decoded.replace(/\0/g, '');
        // Resolve the full path
        const resolved = path.resolve(baseDir, sanitized);
        // Ensure the resolved path is within the base directory
        if (!resolved.startsWith(baseDir)) {
            return null;
        }
        return resolved;
    }
    /**
     * Probe a single port trying to fetch a valid SocketDocs schema.
     */
    probePort(port) {
        return new Promise((resolve) => {
            // Don't probe ourselves when serving the same mock schema unless discovery explicitly includes it
            // We still return it as a candidate so the UI can see "this server"
            const tryPaths = [...DISCOVERY_JSON_PATHS];
            // ensure custom jsonPath is tried first
            if (this.jsonPath && !tryPaths.includes(this.jsonPath)) {
                tryPaths.unshift(this.jsonPath);
            }
            let pathIndex = 0;
            const tryNextPath = () => {
                if (pathIndex >= tryPaths.length) {
                    resolve(null);
                    return;
                }
                const jp = tryPaths[pathIndex++];
                const start = Date.now();
                const req = http.get({
                    hostname: '127.0.0.1',
                    port,
                    path: jp,
                    timeout: DISCOVERY_TIMEOUT_MS,
                }, (res) => {
                    let body = '';
                    res.on('data', (c) => (body += c));
                    res.on('end', () => {
                        if (res.statusCode !== 200) {
                            tryNextPath();
                            return;
                        }
                        try {
                            const json = JSON.parse(body);
                            const gateways = Array.isArray(json?.gateways) ? json.gateways.length : 0;
                            // Consider valid only if it has gateways array
                            if (!Array.isArray(json?.gateways)) {
                                tryNextPath();
                                return;
                            }
                            resolve({
                                baseUrl: `http://localhost:${port}`,
                                port,
                                jsonPath: jp,
                                gateways,
                                latencyMs: Date.now() - start,
                            });
                        }
                        catch {
                            tryNextPath();
                        }
                    });
                });
                req.on('error', () => tryNextPath());
                req.on('timeout', () => {
                    req.destroy();
                    tryNextPath();
                });
            };
            tryNextPath();
        });
    }
    /**
     * Discover local servers by probing candidate ports concurrently.
     */
    async discoverLocalServers(ports) {
        const candidates = ports && ports.length > 0 ? ports : this.discoveryPorts;
        // Limit concurrency to avoid flooding
        const concurrency = 12;
        const results = [];
        for (let i = 0; i < candidates.length; i += concurrency) {
            const chunk = candidates.slice(i, i + concurrency);
            const probes = await Promise.all(chunk.map((p) => this.probePort(p)));
            for (const r of probes) {
                if (r)
                    results.push(r);
            }
        }
        // sort by port asc, put current port first if present? then gateways desc
        results.sort((a, b) => a.port - b.port);
        return results;
    }
    start() {
        this.server = http.createServer(async (req, res) => {
            const fullUrl = req.url || '/';
            const [urlPath, queryString] = fullUrl.split('?');
            // Normalize paths for comparison (remove trailing slashes)
            const normalize = (p) => p === '/' ? p : p.replace(/\/+$/, '');
            const reqPath = normalize(urlPath);
            const jsonPath = normalize(this.jsonPath);
            // CORS preflight
            if (req.method === 'OPTIONS') {
                res.writeHead(204, {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                });
                res.end();
                return;
            }
            console.log(`[SocketDocs] [Standalone] ${req.method} ${urlPath} -> Mapping: ${reqPath}`);
            // 0. Discovery endpoint (server-side scan to avoid browser CORS issues)
            if (this.discoveryEnabled && (reqPath === '/socket-docs/servers' || reqPath === '/socket-docs/discover' || reqPath === '/socket-docs/discovery' || reqPath === '/__socket-docs/servers' || reqPath === '/__discover')) {
                try {
                    // Allow ?ports=3000,3001 or ?port=3000
                    let ports;
                    if (queryString) {
                        const params = new URLSearchParams(queryString);
                        const portsParam = params.get('ports') || params.get('port');
                        if (portsParam) {
                            ports = portsParam
                                .split(',')
                                .map((s) => parseInt(s.trim(), 10))
                                .filter((n) => !isNaN(n) && n > 0 && n < 65536);
                        }
                    }
                    const servers = await this.discoverLocalServers(ports);
                    res.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                        'Cache-Control': 'no-store',
                    });
                    res.end(JSON.stringify({ servers, scannedPorts: ports || this.discoveryPorts, timestamp: Date.now() }));
                }
                catch (e) {
                    res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                    res.end(JSON.stringify({ error: e.message }));
                }
                return;
            }
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
                const filePath = this.sanitizePath(urlPath, this.uiDistPath);
                if (filePath && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                    const ext = path.extname(filePath);
                    res.writeHead(200, { 'Content-Type': this.getContentType(ext) });
                    res.end(fs.readFileSync(filePath));
                    return;
                }
            }
            // 3. Serve UI Index (Fallback for SPA routing)
            const indexPath = path.join(this.uiDistPath, 'index.html');
            if (fs.existsSync(indexPath)) {
                let content = fs.readFileSync(indexPath, 'utf-8');
                const configScript = `
          <script>
            window.SOCKET_DOCS_CONFIG = {
              standalone: true,
              discoveryEnabled: ${this.discoveryEnabled},
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
        this.server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.error(`[SocketDocs] ❌ Port ${this.port} is already in use`);
            }
            else {
                console.error(`[SocketDocs] ❌ Server error:`, err);
            }
            throw err;
        });
        this.server.listen(this.port, () => {
            console.log(`\n[SocketDocs] 🚀 Standalone Development Server`);
            console.log(`[SocketDocs] URL: http://localhost:${this.port}`);
            console.log(`[SocketDocs] Discovery: ${this.discoveryEnabled ? 'enabled' : 'disabled'} (GET /socket-docs/servers)`);
            console.log(`[SocketDocs] Mode: Standalone (Dev)\n`);
        });
    }
    getContentType(ext) {
        const mimeTypes = {
            '.js': 'application/javascript',
            '.mjs': 'application/javascript',
            '.css': 'text/css',
            '.html': 'text/html',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf',
            '.eot': 'application/vnd.ms-fontobject',
            '.map': 'application/json',
            '.webp': 'image/webp',
            '.mp4': 'video/mp4',
            '.webm': 'video/webm',
            '.txt': 'text/plain',
            '.xml': 'application/xml',
            '.pdf': 'application/pdf',
            '.zip': 'application/zip',
        };
        return mimeTypes[ext] || 'application/octet-stream';
    }
    /**
     * Stop the server gracefully.
     * Returns a promise that resolves when the server has closed.
     */
    stop() {
        return new Promise((resolve, reject) => {
            if (!this.server) {
                resolve();
                return;
            }
            this.server.close((err) => {
                if (err) {
                    reject(err);
                }
                else {
                    this.server = null;
                    console.log(`[SocketDocs] 🛑 Standalone server stopped`);
                    resolve();
                }
            });
        });
    }
    /**
     * Check if the server is currently running.
     */
    isRunning() {
        return this.server !== null && this.server.listening;
    }
    /**
     * Get the port the server is listening on.
     */
    getPort() {
        return this.port;
    }
}
exports.StandaloneServer = StandaloneServer;
//# sourceMappingURL=standalone.js.map