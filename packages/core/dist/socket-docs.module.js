"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketDocsModule = void 0;
const socket_explorer_service_1 = require("./explorer/socket-explorer.service");
class SocketDocsModule {
    static async setup(app) {
        const explorer = app.get(socket_explorer_service_1.SocketExplorerService);
        explorer.explore();
    }
}
exports.SocketDocsModule = SocketDocsModule;
//# sourceMappingURL=socket-docs.module.js.map