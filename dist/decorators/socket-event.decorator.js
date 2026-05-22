"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEvent = void 0;
const common_1 = require("@nestjs/common");
const metadata_constants_1 = require("../constants/metadata.constants");
const SocketEvent = (options) => {
    const metadata = typeof options === 'string' ? { event: options } : options;
    return (0, common_1.SetMetadata)(metadata_constants_1.SOCKET_EVENT_METADATA, metadata);
};
exports.SocketEvent = SocketEvent;
//# sourceMappingURL=socket-event.decorator.js.map