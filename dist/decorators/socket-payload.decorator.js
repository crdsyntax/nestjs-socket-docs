"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketPayload = void 0;
const metadata_constants_1 = require("../constants/metadata.constants");
const SocketPayload = (type) => {
    return (target, propertyKey, parameterIndex) => {
        const existingPayloads = Reflect.getOwnMetadata(metadata_constants_1.SOCKET_PAYLOAD_METADATA, target, propertyKey) || [];
        existingPayloads[parameterIndex] = type;
        Reflect.defineMetadata(metadata_constants_1.SOCKET_PAYLOAD_METADATA, existingPayloads, target, propertyKey);
    };
};
exports.SocketPayload = SocketPayload;
//# sourceMappingURL=socket-payload.decorator.js.map