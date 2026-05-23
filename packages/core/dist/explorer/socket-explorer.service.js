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
                this.reflector.get('websockets:is_gateway', instance.constructor) ||
                Reflect.getMetadata('websockets:is_gateway', instance.constructor));
        });
        socketControllers.forEach(wrapper => {
            const { instance } = wrapper;
            const prototype = Object.getPrototypeOf(instance);
            const controllerMetadata = this.reflector.get(metadata_constants_1.SOCKET_CONTROLLER_METADATA, instance.constructor) || {};
            let gatewayMetadata = this.reflector.get('websockets:gateway_metadata', instance.constructor) ||
                Reflect.getMetadata('websockets:gateway_metadata', instance.constructor);
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
                const method = instance[methodName];
                const eventMetadata = this.reflector.get(metadata_constants_1.SOCKET_EVENT_METADATA, method) ||
                    Reflect.getMetadata(metadata_constants_1.SOCKET_EVENT_METADATA, method);
                const subscribeMetadata = this.reflector.get('websockets:subscribe_message', method) ||
                    Reflect.getMetadata('websockets:subscribe_message', method);
                if (eventMetadata || subscribeMetadata) {
                    const eventName = eventMetadata?.event || subscribeMetadata;
                    const eventEntry = {
                        event: eventName,
                        summary: eventMetadata?.summary || `Event: ${eventName}`,
                        description: eventMetadata?.description,
                        emits: eventMetadata?.emits,
                        methodName
                    };
                    if (eventMetadata?.response) {
                        eventEntry.responseSchema = schema_generator_1.SchemaGenerator.generate(eventMetadata.response);
                    }
                    // 0. Try to get payload from decorator option (payload: Dto)
                    if (eventMetadata?.payload) {
                        console.log(`[SocketDocs] Method ${methodName} - Found DTO via @SocketEvent({ payload })`);
                        eventEntry.payloadSchema = schema_generator_1.SchemaGenerator.generate(eventMetadata.payload);
                    }
                    // 1. Try to get payload from custom decorator (SocketPayload)
                    // Only if not already found via option
                    if (!eventEntry.payloadSchema) {
                        let payloadMetadata = Reflect.getMetadata(metadata_constants_1.SOCKET_PAYLOAD_METADATA, prototype, methodName);
                        // 2. Try to find MessageBody parameter index
                        const messageBodyIndex = Reflect.getMetadata('websockets:message_body', prototype, methodName);
                        // 3. Fallback to design:paramtypes
                        const paramTypes = Reflect.getMetadata('design:paramtypes', prototype, methodName);
                        if (payloadMetadata && Array.isArray(payloadMetadata)) {
                            const dto = payloadMetadata.find(d => d && typeof d === 'function' &&
                                !this.isPrimitive(d) && !this.isSocketType(d));
                            console.log(`[SocketDocs] Method ${methodName} - Found DTO via SocketPayload:`, dto?.name);
                            if (dto)
                                eventEntry.payloadSchema = schema_generator_1.SchemaGenerator.generate(dto);
                        }
                        else if (messageBodyIndex !== undefined && paramTypes && paramTypes[messageBodyIndex]) {
                            const dto = paramTypes[messageBodyIndex];
                            console.log(`[SocketDocs] Method ${methodName} - Found DTO via MessageBody:`, dto?.name);
                            if (dto && typeof dto === 'function' && !this.isPrimitive(dto) && !this.isSocketType(dto)) {
                                eventEntry.payloadSchema = schema_generator_1.SchemaGenerator.generate(dto);
                            }
                        }
                        else if (paramTypes && Array.isArray(paramTypes)) {
                            const dto = paramTypes.find(d => d && typeof d === 'function' &&
                                !this.isPrimitive(d) && !this.isSocketType(d));
                            console.log(`[SocketDocs] Method ${methodName} - Found DTO via design:paramtypes:`, dto?.name);
                            if (dto)
                                eventEntry.payloadSchema = schema_generator_1.SchemaGenerator.generate(dto);
                        }
                    }
                    gatewaySchema.events.push(eventEntry);
                }
            });
            this.schema.gateways.push(gatewaySchema);
        });
    }
    isPrimitive(type) {
        return [String, Number, Boolean, Array, Object, Date].includes(type);
    }
    isSocketType(type) {
        if (!type || !type.name)
            return false;
        const socketTypes = ['Socket', 'Server', 'Namespace', 'Adapter', 'EventEmitter'];
        return socketTypes.includes(type.name);
    }
}
exports.SocketExplorerService = SocketExplorerService;
//# sourceMappingURL=socket-explorer.service.js.map