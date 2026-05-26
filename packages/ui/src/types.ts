export type LogType = "sent" | "received" | "error";

export interface LogEntry {
  id: number;
  timestamp: string;
  type: LogType;
  message: string;
  data?: unknown;
}

export interface SocketDocsPayloadSchema {
  type: string;
  properties?: Record<string, any>;
  required?: string[];
  example?: unknown;
  description?: string;
}

export interface SocketDocsEvent {
  event: string;
  summary?: string;
  description?: string;
  payloadSchema?: SocketDocsPayloadSchema;
  responseSchema?: any;
  emits?: string;
  auth?: 'JWT' | 'API_KEY' | 'BASIC' | 'NONE';
}

export interface SocketDocsGateway {
  name: string;
  namespace: string;
  path: string;
  events: SocketDocsEvent[];
}

export interface SocketDocsData {
  gateways: SocketDocsGateway[];
}

export type PayloadMap = Record<string, string>;
export type ConnectedState = Record<string, boolean>;
export type ExpandedState = Record<string, boolean>;
