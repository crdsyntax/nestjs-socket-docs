import { SetMetadata } from '@nestjs/common';
import { SOCKET_EVENT_METADATA } from '../constants/metadata.constants';

export interface SocketEventOptions {
  event: string;
  summary?: string;
  description?: string;
  /**
   * Request payload DTO
   */
  payload?: any;
  /**
   * Response DTO
   */
  response?: any;
  /**
   * Name of the event the client should listen for as a result of this action
   */
  emits?: string;
}

export const SocketEvent = (options: string | SocketEventOptions): MethodDecorator => {
  const metadata = typeof options === 'string' ? { event: options } : options;
  return SetMetadata(SOCKET_EVENT_METADATA, metadata);
};
