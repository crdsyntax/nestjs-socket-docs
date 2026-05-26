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
        // Robust path resolution for ui-dist using require.resolve
        let uiDistPath = "";
        try {
            // Find the package root by resolving its package.json
            const packageJsonPath = require.resolve("@crdsyntax/nestjs-socket-docs/package.json");
            uiDistPath = path.join(path.dirname(packageJsonPath), "ui-dist");
        }
        catch (e) {
            // Fallback to manual resolution if require.resolve fails
            const possiblePaths = [
                path.resolve(__dirname, "../ui-dist"),
                path.resolve(__dirname, "../../ui-dist"),
                path.resolve(process.cwd(), "node_modules/@crdsyntax/nestjs-socket-docs/ui-dist"),
            ];
            uiDistPath = possiblePaths.find(p => fs.existsSync(path.join(p, "index.html"))) || possiblePaths[0];
        }
        console.log(`[SocketDocs] UI Dist Path resolved to: ${uiDistPath}`);
        // JSON Endpoint
        httpAdapter.get("/socket-docs/json", (_req, res) => {
            return httpAdapter.reply(res, explorer.getSchema(), 200);
        });
        // UI Index
        httpAdapter.get("/socket-docs", (req, res) => {
            const url = httpAdapter.getRequestUrl(req);
            if (!url.endsWith("/") && !url.includes(".")) {
                return httpAdapter.redirect(res, 301, url + "/");
            }
            const indexPath = path.join(uiDistPath, "index.html");
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, "utf-8");
                httpAdapter.setHeader(res, "Content-Type", "text/html");
                return httpAdapter.reply(res, content, 200);
            }
            else {
                return httpAdapter.reply(res, `UI not found at ${indexPath}. Please ensure the package is correctly installed.`, 404);
            }
        });
        // Assets
        const assetRoute = "/socket-docs/assets/:file";
        httpAdapter.get(assetRoute, (req, res) => {
            const params = req.params;
            const filename = params.file || "";
            const filePath = path.join(uiDistPath, "assets", filename);
            if (fs.existsSync(filePath)) {
                const ext = path.extname(filePath);
                const mime = ext === ".js" ? "application/javascript" : ext === ".css" ? "text/css" : "application/octet-stream";
                // Read as string for text assets to prevent NestJS from converting Buffers to JSON
                const content = (ext === ".js" || ext === ".css")
                    ? fs.readFileSync(filePath, "utf-8")
                    : fs.readFileSync(filePath);
                httpAdapter.setHeader(res, "Content-Type", mime);
                return httpAdapter.reply(res, content, 200);
            }
            else {
                console.warn(`[SocketDocs] Asset not found: ${filePath}`);
                return httpAdapter.reply(res, "Asset not found", 404);
            }
        });
        console.log(`🚀 Socket Docs available at /socket-docs (UI path: ${uiDistPath})`);
    }
}
exports.SocketDocsModule = SocketDocsModule;
//# sourceMappingURL=socket-docs.module.js.map