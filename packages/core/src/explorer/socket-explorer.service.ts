import { MetadataScanner, Reflector } from '@nestjs/core';
import { SOCKET_CONTROLLER_METADATA, SOCKET_EVENT_METADATA, SOCKET_PAYLOAD_METADATA } from '../constants/metadata.constants';
import { SchemaGenerator } from '../schema-generator/schema-generator';

export class SocketExplorerService {
  private schema: any = {
    gateways: []
  };

  constructor(
    private readonly modules: Map<any, any>,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector,
  ) {}

  getSchema() {
    return this.schema;
  }

  explore() {
    const modulesArray = [...this.modules.values()];
    const providers = modulesArray.flatMap(module => [...module.providers.values()]);
    
    const socketControllers = providers.filter(wrapper => {
      const { instance } = wrapper;
      if (!instance || !instance.constructor) return false;
      return (
        this.reflector.get(SOCKET_CONTROLLER_METADATA, instance.constructor) ||
        this.reflector.get('websockets:is_gateway', instance.constructor) ||
        Reflect.getMetadata('websockets:is_gateway', instance.constructor)
      );
    });

    socketControllers.forEach(wrapper => {
      const { instance } = wrapper;
      if (!instance) return;
      const prototype = Object.getPrototypeOf(instance);
      
      const controllerMetadata = this.reflector.get(SOCKET_CONTROLLER_METADATA, instance.constructor) || {};
      
      let gatewayMetadata = this.reflector.get('websockets:gateway_metadata', instance.constructor) || 
                            Reflect.getMetadata('websockets:gateway_metadata', instance.constructor);
      
      const gatewayNamespace = Reflect.getMetadata('websockets:namespace', instance.constructor);
      
      if (!gatewayMetadata) {
        gatewayMetadata = {};
      }
      
      const namespace = controllerMetadata.name || gatewayNamespace || gatewayMetadata.namespace || '/';
      const path = gatewayMetadata.path || '/socket.io';
      
      console.log(`[SocketDocs] Exploring gateway: ${instance.constructor.name} (ns: ${namespace}, path: ${path})`);
      
      const gatewaySchema: any = {
        name: instance.constructor.name,
        namespace,
        path,
        description: controllerMetadata.description,
        events: []
      };

      // Get all method names from prototype to be more robust across NestJS versions
      const methodNames = this.metadataScanner.getAllMethodNames(prototype);
      
      methodNames.forEach(methodName => {
          const method = instance[methodName];
          if (typeof method !== 'function') return;

          const eventMetadata = this.reflector.get(SOCKET_EVENT_METADATA, method) || 
                               Reflect.getMetadata(SOCKET_EVENT_METADATA, method);
          const subscribeMetadata = this.reflector.get('websockets:subscribe_message', method) || 
                                   Reflect.getMetadata('websockets:subscribe_message', method);
          
          if (eventMetadata || subscribeMetadata) {
            const eventName = eventMetadata?.event || subscribeMetadata;
            console.log(`[SocketDocs]   Found event: ${eventName} in method: ${methodName}`);
            const eventEntry: any = {
              event: eventName,
              summary: eventMetadata?.summary || `Event: ${eventName}`,
              description: eventMetadata?.description,
              emits: eventMetadata?.emits,
              methodName
            };

            if (eventMetadata?.response) {
              eventEntry.responseSchema = SchemaGenerator.generate(eventMetadata.response);
            }

            // 0. Try to get payload from decorator option (payload: Dto)
            if (eventMetadata?.payload) {
              console.log(`[SocketDocs] Method ${methodName} - Found DTO via @SocketEvent({ payload })`);
              eventEntry.payloadSchema = SchemaGenerator.generate(eventMetadata.payload);
            }

            // 1. Try to get payload from custom decorator (SocketPayload)
            // Only if not already found via option
            if (!eventEntry.payloadSchema) {
              let payloadMetadata = Reflect.getMetadata(SOCKET_PAYLOAD_METADATA, prototype, methodName);
              
              // 2. Try to find MessageBody parameter index
              const messageBodyIndex = Reflect.getMetadata('websockets:message_body', prototype, methodName);

              // 3. Fallback to design:paramtypes
              const paramTypes = Reflect.getMetadata('design:paramtypes', prototype, methodName);

              if (payloadMetadata && Array.isArray(payloadMetadata)) {
                const dto = payloadMetadata.find(d => 
                  d && typeof d === 'function' && 
                  !this.isPrimitive(d) && !this.isSocketType(d)
                );
                console.log(`[SocketDocs] Method ${methodName} - Found DTO via SocketPayload:`, dto?.name);
                if (dto) eventEntry.payloadSchema = SchemaGenerator.generate(dto);
              } else if (messageBodyIndex !== undefined && paramTypes && paramTypes[messageBodyIndex]) {
                const dto = paramTypes[messageBodyIndex];
                console.log(`[SocketDocs] Method ${methodName} - Found DTO via MessageBody:`, dto?.name);
                if (dto && typeof dto === 'function' && !this.isPrimitive(dto) && !this.isSocketType(dto)) {
                  eventEntry.payloadSchema = SchemaGenerator.generate(dto);
                }
              } else if (paramTypes && Array.isArray(paramTypes)) {
                const dto = paramTypes.find(d => 
                  d && typeof d === 'function' && 
                  !this.isPrimitive(d) && !this.isSocketType(d)
                );
                console.log(`[SocketDocs] Method ${methodName} - Found DTO via design:paramtypes:`, dto?.name);
                if (dto) eventEntry.payloadSchema = SchemaGenerator.generate(dto);
              }
            }
            
            gatewaySchema.events.push(eventEntry);
          }
        }
      );
      
      this.schema.gateways.push(gatewaySchema);
    });
  }

  private isPrimitive(type: any): boolean {
    return [String, Number, Boolean, Array, Object, Date].includes(type);
  }

  private isSocketType(type: any): boolean {
    if (!type || !type.name) return false;
    const socketTypes = ['Socket', 'Server', 'Namespace', 'Adapter', 'EventEmitter'];
    return socketTypes.includes(type.name);
  }
}
