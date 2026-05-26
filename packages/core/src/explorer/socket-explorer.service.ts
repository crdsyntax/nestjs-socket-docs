import { MetadataScanner, Reflector } from '@nestjs/core';
import { SOCKET_CONTROLLER_METADATA, SOCKET_EVENT_METADATA, SOCKET_PAYLOAD_METADATA } from '../constants/metadata.constants';
import { SchemaGenerator } from '../schema-generator/schema-generator';
import { SocketDocsSchema, GatewaySchema, EventSchema } from '../interfaces/schema.interface';
import { NestModule } from '../socket-docs.module';

export class SocketExplorerService {
  private schema: SocketDocsSchema = {
    gateways: []
  };

  constructor(
    private readonly modules: Map<string, NestModule>,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector,
  ) {}

  getSchema(): SocketDocsSchema {
    return this.schema;
  }

  explore(): void {
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
      const constructor = instance.constructor;
      
      const controllerMetadata = this.reflector.get(SOCKET_CONTROLLER_METADATA, constructor) || {};
      
      let gatewayMetadata = this.reflector.get('websockets:gateway_metadata', constructor) || 
                            Reflect.getMetadata('websockets:gateway_metadata', constructor);
      
      const gatewayNamespace = Reflect.getMetadata('websockets:namespace', constructor);
      
      if (!gatewayMetadata) {
        gatewayMetadata = {};
      }
      
      const namespace: string = controllerMetadata.name || gatewayNamespace || gatewayMetadata.namespace || '/';
      const path: string = gatewayMetadata.path || '/socket.io';
      
      console.log(`[SocketDocs] Exploring gateway: ${constructor.name} (ns: ${namespace}, path: ${path})`);
      
      const gatewaySchema: GatewaySchema = {
        name: constructor.name,
        namespace,
        path,
        description: controllerMetadata.description,
        events: []
      };

      const methodNames = this.metadataScanner.getAllMethodNames(prototype);
      
      methodNames.forEach(methodName => {
          const method = (instance as Record<string, unknown>)[methodName];
          if (typeof method !== 'function') return;

          const eventMetadata = this.reflector.get(SOCKET_EVENT_METADATA, method) || 
                               Reflect.getMetadata(SOCKET_EVENT_METADATA, method);
          const subscribeMetadata = this.reflector.get('websockets:subscribe_message', method) || 
                                   Reflect.getMetadata('websockets:subscribe_message', method);
          
          if (eventMetadata || subscribeMetadata) {
            const eventName: string = eventMetadata?.event || subscribeMetadata;
            console.log(`[SocketDocs]   Found event: ${eventName} in method: ${methodName}`);
            const eventEntry: EventSchema = {
              event: eventName,
              summary: eventMetadata?.summary || `Event: ${eventName}`,
              description: eventMetadata?.description,
              emits: eventMetadata?.emits,
              auth: eventMetadata?.auth,
              methodName
            };

            if (eventMetadata?.response) {
              eventEntry.responseSchema = SchemaGenerator.generate(eventMetadata.response);
            }

            if (eventMetadata?.payload) {
              eventEntry.payloadSchema = SchemaGenerator.generate(eventMetadata.payload);
            }

            if (!eventEntry.payloadSchema) {
              const payloadMetadata = Reflect.getMetadata(SOCKET_PAYLOAD_METADATA, prototype, methodName);
              const messageBodyIndex = Reflect.getMetadata('websockets:message_body', prototype, methodName);
              const paramTypes = Reflect.getMetadata('design:paramtypes', prototype, methodName);

              if (payloadMetadata && Array.isArray(payloadMetadata)) {
                const dto = payloadMetadata.find(d => 
                  d && typeof d === 'function' && 
                  !this.isPrimitive(d) && !this.isSocketType(d)
                );
                if (dto) eventEntry.payloadSchema = SchemaGenerator.generate(dto);
              } else if (messageBodyIndex !== undefined && Array.isArray(paramTypes) && paramTypes[messageBodyIndex]) {
                const dto = paramTypes[messageBodyIndex];
                if (dto && typeof dto === 'function' && !this.isPrimitive(dto) && !this.isSocketType(dto)) {
                  eventEntry.payloadSchema = SchemaGenerator.generate(dto);
                }
              } else if (Array.isArray(paramTypes)) {
                const dto = paramTypes.find(d => 
                  d && typeof d === 'function' && 
                  !this.isPrimitive(d) && !this.isSocketType(d)
                );
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

  private isPrimitive(type: unknown): boolean {
    const primitives = [String, Number, Boolean, Array, Object, Date];
    return primitives.some(p => p === type);
  }

  private isSocketType(type: unknown): boolean {
    const t = type as { name?: string };
    if (!t || !t.name) return false;
    const socketTypes = ['Socket', 'Server', 'Namespace', 'Adapter', 'EventEmitter'];
    return socketTypes.includes(t.name);
  }
}
