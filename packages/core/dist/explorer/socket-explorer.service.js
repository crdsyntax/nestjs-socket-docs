"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketExplorerService = void 0;
const metadata_constants_1 = require("../constants/metadata.constants");
const schema_generator_1 = require("../schema-generator/schema-generator");
class SocketExplorerService {
    modules;
    metadataScanner;
    reflector;
    schema = {
        gateways: []
    };
    constructor(modules, metadataScanner, reflector) {
        this.modules = modules;
        this.metadataScanner = metadataScanner;
        this.reflector = reflector;
    }
    getSchema() {
        return this.schema;
    }
    explore() {
        const modulesArray = [...this.modules.values()];
        const providers = modulesArray.flatMap(module => [...module.providers.values()]);
        const socketControllers = providers.filter(wrapper => {
            const { instance } = wrapper;
            if (!instance || !instance.constructor)
                return false;
            return (this.reflector.get(metadata_constants_1.SOCKET_CONTROLLER_METADATA, instance.constructor) ||
                this.reflector.get('websockets:is_gateway', instance.constructor));
        });
        console.log(`🔍 Scanning ${socketControllers.length} socket controllers...`);
        socketControllers.forEach(wrapper => {
            const { instance } = wrapper;
            const prototype = Object.getPrototypeOf(instance);
            const controllerMetadata = this.reflector.get(metadata_constants_1.SOCKET_CONTROLLER_METADATA, instance.constructor) || {};
            // Try to get gateway metadata if it exists
            let gatewayMetadata = this.reflector.get('websockets:gateway_metadata', instance.constructor);
            if (!gatewayMetadata) {
                gatewayMetadata = {};
            }
            const gatewaySchema = {
                name: instance.constructor.name,
                namespace: controllerMetadata.name || gatewayMetadata.namespace || '/',
                path: gatewayMetadata.path || '/socket.io',
                description: controllerMetadata.description,
                events: []
            };
            this.metadataScanner.scanFromPrototype(instance, prototype, methodName => {
                const eventMetadata = this.reflector.get(metadata_constants_1.SOCKET_EVENT_METADATA, instance[methodName]);
                const subscribeMetadata = this.reflector.get('websockets:subscribe_message', instance[methodName]);
                if (eventMetadata || subscribeMetadata) {
                    const eventName = eventMetadata?.event || subscribeMetadata;
                    const eventEntry = {
                        event: eventName,
                        summary: eventMetadata?.summary || `Event: ${eventName}`,
                        description: eventMetadata?.description,
                        methodName
                    };
                    // Try to get payload from custom decorator or design:paramtypes
                    let payloadMetadata = Reflect.getMetadata(metadata_constants_1.SOCKET_PAYLOAD_METADATA, instance, methodName);
                    // Fallback to design:paramtypes if no custom payload metadata
                    if (!payloadMetadata) {
                        const paramTypes = Reflect.getMetadata('design:paramtypes', instance, methodName);
                        if (paramTypes && Array.isArray(paramTypes)) {
                            // Usually the first or second param is the body
                            payloadMetadata = paramTypes;
                        }
                    }
                    if (payloadMetadata && Array.isArray(payloadMetadata)) {
                        // We look for the first non-primitive type that could be a DTO
                        const dto = payloadMetadata.find(d => d && typeof d === 'function' &&
                            ![String, Number, Boolean, Array, Object, Date].includes(d));
                        if (dto) {
                            eventEntry.payloadSchema = schema_generator_1.SchemaGenerator.generate(dto);
                        }
                    }
                    gatewaySchema.events.push(eventEntry);
                }
            });
            this.schema.gateways.push(gatewaySchema);
        });
    }
}
exports.SocketExplorerService = SocketExplorerService;
//# sourceMappingURL=socket-explorer.service.js.map