"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketController = void 0;
const common_1 = require("@nestjs/common");
const metadata_constants_1 = require("../constants/metadata.constants");
const SocketController = (options) => {
    const metadata = typeof options === 'string' ? { name: options } : options;
    return (0, common_1.SetMetadata)(metadata_constants_1.SOCKET_CONTROLLER_METADATA, metadata);
};
exports.SocketController = SocketController;
//# sourceMappingURL=socket-controller.decorator.js.map