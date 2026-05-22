import { SetMetadata } from '@nestjs/common';
import { SOCKET_CONTROLLER_METADATA } from '../constants/metadata.constants';

export interface SocketControllerOptions {
  name: string;
  description?: string;
}

export const SocketController = (options: string | SocketControllerOptions): ClassDecorator => {
  const metadata = typeof options === 'string' ? { name: options } : options;
  return SetMetadata(SOCKET_CONTROLLER_METADATA, metadata);
};
