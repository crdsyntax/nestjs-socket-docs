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
      return this.reflector.get(SOCKET_CONTROLLER_METADATA, instance.constructor);
    });

    console.log(`🔍 Scanning ${socketControllers.length} socket controllers...`);

    socketControllers.forEach(wrapper => {
      const { instance } = wrapper;
      const prototype = Object.getPrototypeOf(instance);
      
      const controllerMetadata = this.reflector.get(SOCKET_CONTROLLER_METADATA, instance.constructor) || {};
      
      // Try to get gateway metadata if it exists
      let gatewayMetadata = this.reflector.get('websockets:gateway_metadata', instance.constructor);
      if (!gatewayMetadata) {
        gatewayMetadata = {};
      }
      
      const gatewaySchema: any = {
        name: instance.constructor.name,
        namespace: controllerMetadata.name || gatewayMetadata.namespace || '/',
        path: gatewayMetadata.path || '/socket.io',
        description: controllerMetadata.description,
        events: []
      };


      this.metadataScanner.scanFromPrototype(
        instance,
        prototype,
        methodName => {
          const eventMetadata = this.reflector.get(SOCKET_EVENT_METADATA, instance[methodName]);
          if (eventMetadata) {
            const eventEntry: any = {
              event: eventMetadata.event,
              summary: eventMetadata.summary,
              description: eventMetadata.description,
              methodName
            };

            const payloadMetadata = Reflect.getMetadata(SOCKET_PAYLOAD_METADATA, instance, methodName);
            if (payloadMetadata && Array.isArray(payloadMetadata)) {
              const dto = payloadMetadata.find(d => d !== undefined && d !== null);
              if (dto && dto.prototype) {
                eventEntry.payloadSchema = SchemaGenerator.generate(dto.prototype);
              }
            }
            
            gatewaySchema.events.push(eventEntry);
          }
        }
      );
      
      this.schema.gateways.push(gatewaySchema);
    });
  }
}
