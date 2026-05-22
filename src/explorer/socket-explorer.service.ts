import { Injectable, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, MetadataScanner, Reflector } from '@nestjs/core';
import { SOCKET_CONTROLLER_METADATA, SOCKET_EVENT_METADATA, SOCKET_PAYLOAD_METADATA } from '../constants/metadata.constants';

@Injectable()
export class SocketExplorerService implements OnModuleInit {
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector,
  ) {}

  onModuleInit() {
    this.explore();
  }

  explore() {
    const wrappers = this.discoveryService.getProviders();
    const socketControllers = wrappers.filter(wrapper => {
      const { instance } = wrapper;
      if (!instance) return false;
      return this.reflector.get(SOCKET_CONTROLLER_METADATA, instance.constructor);
    });

    socketControllers.forEach(wrapper => {
      const { instance } = wrapper;
      const prototype = Object.getPrototypeOf(instance);
      
      this.metadataScanner.scanFromPrototype(
        instance,
        prototype,
        methodName => {
          const eventMetadata = this.reflector.get(SOCKET_EVENT_METADATA, instance[methodName]);
          if (eventMetadata) {
            console.log(`Found event: ${eventMetadata.event} in ${instance.constructor.name}`);
            const payloadMetadata = Reflect.getMetadata(SOCKET_PAYLOAD_METADATA, instance, methodName);
            if (payloadMetadata) {
              console.log(`Payload for ${methodName}:`, payloadMetadata);
            }
          }
        }
      );
    });
  }
}
