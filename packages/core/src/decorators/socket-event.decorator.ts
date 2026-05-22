import { SetMetadata } from '@nestjs/common';
import { SOCKET_EVENT_METADATA } from '../constants/metadata.constants';

export interface SocketEventOptions {
  event: string;
  summary?: string;
  description?: string;
  response?: any;
}

export const SocketEvent = (options: string | SocketEventOptions): MethodDecorator => {
  const metadata = typeof options === 'string' ? { event: options } : options;
  return SetMetadata(SOCKET_EVENT_METADATA, metadata);
};
