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
exports.SocketDocsModule = void 0;
const core_1 = require("@nestjs/core");
const socket_explorer_service_1 = require("./explorer/socket-explorer.service");
const standalone_1 = require("./runtime/standalone");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
class SocketDocsModule {
    /**
     * Start a standalone development server.
     * Useful for testing the UI with a specific schema.
     */
    static async dev(schema, options = {}) {
        const server = new standalone_1.StandaloneServer(schema, options);
        server.start();
        return server;
    }
    static async setup(app) {
        console.log("--- SocketDocsModule Setup ---");
        const explorer = this.createExplorer(app);
        if (!explorer)
            return;
        console.log("[SocketDocs] Exploring modules...");
        try {
            explorer.explore();
        }
        catch (err) {
            console.error("❌ [SocketDocs] Error during module exploration:", err);
        }
        const schema = explorer.getSchema();
        this.logDiscovery(schema);
        this.registerRoutes(app, explorer);
    }
    static createExplorer(app) {
        const container = app.container;
        if (!container) {
            console.error("❌ [SocketDocs] Could not find NestJS container.");
            return null;
        }
        const modules = container.getModules();
        const metadataScanner = new core_1.MetadataScanner();
        const reflector = new core_1.Reflector();
        return new socket_explorer_service_1.SocketExplorerService(modules, metadataScanner, reflector);
    }
    static logDiscovery(schema) {
        console.log(`[SocketDocs] Found ${schema.gateways.length} gateways.`);
        schema.gateways.forEach((g) => {
            console.log(`  - Gateway: ${g.name}, Events: ${g.events.length}`);
        });
    }
    static registerRoutes(app, explorer) {
        const httpAdapter = app.getHttpAdapter?.();
        if (!httpAdapter) {
            console.error("❌ [SocketDocs] Could not find HTTP adapter.");
            return;
        }
        const uiDistPath = path.resolve(__dirname, "../ui-dist");
        // JSON Endpoint
        httpAdapter.get("/socket-docs/json", (_req, res) => {
            return httpAdapter.reply(res, explorer.getSchema(), 200);
        });
        // UI Index
        httpAdapter.get("/socket-docs", (req, res) => {
            const url = httpAdapter.getRequestUrl(req);
            if (!url.endsWith("/")) {
                return httpAdapter.redirect(res, 301, url + "/");
            }
            const indexPath = path.join(uiDistPath, "index.html");
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, "utf-8");
                httpAdapter.setHeader(res, "Content-Type", "text/html");
                return httpAdapter.reply(res, content, 200);
            }
            else {
                return httpAdapter.reply(res, "UI not found. Build the UI package first.", 404);
            }
        });
        // Assets
        httpAdapter.get("/socket-docs/assets/:file", (req, res) => {
            const assetPath = req.params.file;
            const filePath = path.resolve(uiDistPath, "assets", assetPath);
            if (fs.existsSync(filePath)) {
                if (typeof res.sendFile === 'function') {
                    return res.sendFile(filePath);
                }
                const content = fs.readFileSync(filePath);
                const ext = path.extname(filePath);
                const mime = ext === '.js' ? 'application/javascript' : ext === '.css' ? 'text/css' : 'application/octet-stream';
                httpAdapter.setHeader(res, "Content-Type", mime);
                return httpAdapter.reply(res, content, 200);
            }
            else {
                return httpAdapter.reply(res, "Asset not found", 404);
            }
        });
        console.log("🚀 Socket Docs available at /socket-docs");
    }
}
exports.SocketDocsModule = SocketDocsModule;
//# sourceMappingURL=socket-docs.module.js.map