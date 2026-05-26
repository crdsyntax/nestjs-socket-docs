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
            if (!instance)
                return;
            const prototype = Object.getPrototypeOf(instance);
            const constructor = instance.constructor;
            const controllerMetadata = this.reflector.get(metadata_constants_1.SOCKET_CONTROLLER_METADATA, constructor) || {};
            let gatewayMetadata = this.reflector.get('websockets:gateway_metadata', constructor) ||
                Reflect.getMetadata('websockets:gateway_metadata', constructor);
            const gatewayNamespace = Reflect.getMetadata('websockets:namespace', constructor);
            if (!gatewayMetadata) {
                gatewayMetadata = {};
            }
            const namespace = controllerMetadata.name || gatewayNamespace || gatewayMetadata.namespace || '/';
            const path = gatewayMetadata.path || '/socket.io';
            console.log(`[SocketDocs] Exploring gateway: ${constructor.name} (ns: ${namespace}, path: ${path})`);
            const gatewaySchema = {
                name: constructor.name,
                namespace,
                path,
                description: controllerMetadata.description,
                events: []
            };
            const methodNames = this.metadataScanner.getAllMethodNames(prototype);
            methodNames.forEach(methodName => {
                const method = instance[methodName];
                if (typeof method !== 'function')
                    return;
                const eventMetadata = this.reflector.get(metadata_constants_1.SOCKET_EVENT_METADATA, method) ||
                    Reflect.getMetadata(metadata_constants_1.SOCKET_EVENT_METADATA, method);
                const subscribeMetadata = this.reflector.get('websockets:subscribe_message', method) ||
                    Reflect.getMetadata('websockets:subscribe_message', method);
                if (eventMetadata || subscribeMetadata) {
                    const eventName = eventMetadata?.event || subscribeMetadata;
                    console.log(`[SocketDocs]   Found event: ${eventName} in method: ${methodName}`);
                    const eventEntry = {
                        event: eventName,
                        summary: eventMetadata?.summary || `Event: ${eventName}`,
                        description: eventMetadata?.description,
                        emits: eventMetadata?.emits,
                        auth: eventMetadata?.auth,
                        methodName
                    };
                    if (eventMetadata?.response) {
                        eventEntry.responseSchema = schema_generator_1.SchemaGenerator.generate(eventMetadata.response);
                    }
                    if (eventMetadata?.payload) {
                        eventEntry.payloadSchema = schema_generator_1.SchemaGenerator.generate(eventMetadata.payload);
                    }
                    if (!eventEntry.payloadSchema) {
                        const payloadMetadata = Reflect.getMetadata(metadata_constants_1.SOCKET_PAYLOAD_METADATA, prototype, methodName);
                        const messageBodyIndex = Reflect.getMetadata('websockets:message_body', prototype, methodName);
                        const paramTypes = Reflect.getMetadata('design:paramtypes', prototype, methodName);
                        if (payloadMetadata && Array.isArray(payloadMetadata)) {
                            const dto = payloadMetadata.find(d => d && typeof d === 'function' &&
                                !this.isPrimitive(d) && !this.isSocketType(d));
                            if (dto)
                                eventEntry.payloadSchema = schema_generator_1.SchemaGenerator.generate(dto);
                        }
                        else if (messageBodyIndex !== undefined && Array.isArray(paramTypes) && paramTypes[messageBodyIndex]) {
                            const dto = paramTypes[messageBodyIndex];
                            if (dto && typeof dto === 'function' && !this.isPrimitive(dto) && !this.isSocketType(dto)) {
                                eventEntry.payloadSchema = schema_generator_1.SchemaGenerator.generate(dto);
                            }
                        }
                        else if (Array.isArray(paramTypes)) {
                            const dto = paramTypes.find(d => d && typeof d === 'function' &&
                                !this.isPrimitive(d) && !this.isSocketType(d));
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
        const primitives = [String, Number, Boolean, Array, Object, Date];
        return primitives.some(p => p === type);
    }
    isSocketType(type) {
        const t = type;
        if (!t || !t.name)
            return false;
        const socketTypes = ['Socket', 'Server', 'Namespace', 'Adapter', 'EventEmitter'];
        return socketTypes.includes(t.name);
    }
}
exports.SocketExplorerService = SocketExplorerService;
//# sourceMappingURL=socket-explorer.service.js.map