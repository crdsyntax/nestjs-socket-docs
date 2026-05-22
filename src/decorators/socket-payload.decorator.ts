import { SetMetadata } from '@nestjs/common';
import { SOCKET_PAYLOAD_METADATA } from '../constants/metadata.constants';

export const SocketPayload = (type: any): ParameterDecorator => {
  return (target: object, propertyKey: string | symbol, parameterIndex: number) => {
    const existingPayloads = Reflect.getOwnMetadata(SOCKET_PAYLOAD_METADATA, target, propertyKey) || [];
    existingPayloads[parameterIndex] = type;
    Reflect.defineMetadata(SOCKET_PAYLOAD_METADATA, existingPayloads, target, propertyKey);
  };
};
