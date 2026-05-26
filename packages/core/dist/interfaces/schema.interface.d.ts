export interface SocketDocsSchema {
    gateways: GatewaySchema[];
}
export interface GatewaySchema {
    name: string;
    namespace: string;
    path: string;
    description?: string;
    events: EventSchema[];
}
export interface EventSchema {
    event: string;
    summary: string;
    description?: string;
    emits?: string;
    methodName: string;
    auth?: 'JWT' | 'API_KEY' | 'BASIC' | 'NONE';
    payloadSchema?: JsonSchema;
    responseSchema?: JsonSchema;
}
export interface JsonSchema {
    type: 'object' | 'string' | 'number' | 'integer' | 'boolean' | 'array';
    properties?: Record<string, JsonSchema>;
    items?: JsonSchema;
    required?: string[];
    example?: unknown;
    description?: string;
    enum?: unknown[];
    format?: string;
    default?: unknown;
}
//# sourceMappingURL=schema.interface.d.ts.map