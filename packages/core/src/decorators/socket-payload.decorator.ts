import { SetMetadata } from '@nestjs/common';
import { SOCKET_PAYLOAD_METADATA } from '../constants/metadata.constants';

export const SocketPayload = (type: unknown): ParameterDecorator => {
  return (target: object, propertyKey: string | symbol | undefined, parameterIndex: number) => {
    const existingPayloads = Reflect.getOwnMetadata(SOCKET_PAYLOAD_METADATA, target, propertyKey as string | symbol) || [];
    existingPayloads[parameterIndex] = type;
    Reflect.defineMetadata(SOCKET_PAYLOAD_METADATA, existingPayloads, target, propertyKey as string | symbol);
  };
};
