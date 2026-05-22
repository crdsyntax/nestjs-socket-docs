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
            return this.reflector.get(metadata_constants_1.SOCKET_CONTROLLER_METADATA, instance.constructor);
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
                if (eventMetadata) {
                    const eventEntry = {
                        event: eventMetadata.event,
                        summary: eventMetadata.summary,
                        description: eventMetadata.description,
                        methodName
                    };
                    const payloadMetadata = Reflect.getMetadata(metadata_constants_1.SOCKET_PAYLOAD_METADATA, instance, methodName);
                    if (payloadMetadata && Array.isArray(payloadMetadata)) {
                        const dto = payloadMetadata.find(d => d !== undefined && d !== null);
                        if (dto && dto.prototype) {
                            eventEntry.payloadSchema = schema_generator_1.SchemaGenerator.generate(dto.prototype);
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