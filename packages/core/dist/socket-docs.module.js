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
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
class SocketDocsModule {
    static async setup(app) {
        console.log("--- SocketDocsModule Setup ---");
        const modulesContainer = app.get(core_1.ModulesContainer);
        const metadataScanner = app.get(core_1.MetadataScanner);
        const reflector = app.get(core_1.Reflector);
        const explorer = new socket_explorer_service_1.SocketExplorerService(modulesContainer, metadataScanner, reflector);
        console.log("[SocketDocs] Exploring modules...");
        explorer.explore();
        const schema = explorer.getSchema();
        console.log(`[SocketDocs] Found ${schema.gateways.length} gateways.`);
        schema.gateways.forEach((g) => {
            console.log(`  - Gateway: ${g.name}, Events: ${g.events.length}`);
        });
        const httpAdapter = app.getHttpAdapter();
        if (httpAdapter) {
            httpAdapter.get("/socket-docs/json", (req, res) => {
                res.status(200).json(explorer.getSchema());
            });
            const uiDistPath = path.join(__dirname, "..", "ui-dist");
            console.log(`[SocketDocs] UI Assets Path: ${uiDistPath}`);
            // Serve static assets
            httpAdapter.use("/socket-docs/assets", (req, res, next) => {
                const assetPath = req.url;
                const filePath = path.join(uiDistPath, "assets", assetPath);
                if (fs.existsSync(filePath)) {
                    return res.sendFile(filePath);
                }
                next();
            });
            httpAdapter.get("/socket-docs", (req, res) => {
                if (!req.url.endsWith("/")) {
                    const query = req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : "";
                    return res.redirect(301, req.url.split("?")[0] + "/" + query);
                }
                const indexPath = path.join(uiDistPath, "index.html");
                if (fs.existsSync(indexPath)) {
                    res.setHeader("Content-Type", "text/html");
                    return fs.createReadStream(indexPath).pipe(res);
                }
                else {
                    console.error(`[SocketDocs] Index not found at: ${indexPath}`);
                    res.status(404).send(`UI not found. Checked path: ${indexPath}`);
                }
            });
            console.log("🚀 Socket Docs available at /socket-docs");
        }
    }
}
exports.SocketDocsModule = SocketDocsModule;
//# sourceMappingURL=socket-docs.module.js.map