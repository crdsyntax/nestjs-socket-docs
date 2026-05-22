"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketDocsModule = void 0;
const core_1 = require("@nestjs/core");
const socket_explorer_service_1 = require("./explorer/socket-explorer.service");
const path = require("path");
const fs = require("fs");
class SocketDocsModule {
    static async setup(app) {
        console.log('--- SocketDocsModule Setup ---');
        const container = app.container;
        if (!container) {
            console.error('❌ Could not find NestJS container.');
            return;
        }
        const modules = container.getModules();
        const metadataScanner = new core_1.MetadataScanner();
        const reflector = new core_1.Reflector();
        const explorer = new socket_explorer_service_1.SocketExplorerService(modules, metadataScanner, reflector);
        explorer.explore();
        const httpAdapter = app.getHttpAdapter();
        if (httpAdapter) {
            httpAdapter.get('/socket-docs/json', (req, res) => {
                res.status(200).json(explorer.getSchema());
            });
            const uiDistPath = path.resolve(__dirname, '../ui-dist');
            httpAdapter.get('/socket-docs', (req, res) => {
                const indexPath = path.join(uiDistPath, 'index.html');
                if (fs.existsSync(indexPath)) {
                    res.status(200).type('text/html').send(fs.readFileSync(indexPath, 'utf-8'));
                }
                else {
                    res.status(404).send('UI not found. Make sure @nestjs-socket-docs/ui is built.');
                }
            });
            httpAdapter.get('/socket-docs/assets/:file', (req, res) => {
                const filePath = path.join(uiDistPath, 'assets', req.params.file);
                if (fs.existsSync(filePath)) {
                    res.status(200).sendFile(filePath);
                }
                else {
                    res.status(404).send('Asset not found');
                }
            });
            console.log('🚀 Socket Docs available at /socket-docs');
        }
    }
}
exports.SocketDocsModule = SocketDocsModule;
//# sourceMappingURL=socket-docs.module.js.map