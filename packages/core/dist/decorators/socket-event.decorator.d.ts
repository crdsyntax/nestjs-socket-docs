export type SocketAuthType = 'JWT' | 'API_KEY' | 'BASIC' | 'NONE';
export interface SocketEventOptions {
    event: string;
    summary?: string;
    description?: string;
    /**
     * Request payload DTO
     */
    payload?: unknown;
    /**
     * Response DTO
     */
    response?: unknown;
    /**
     * Name of the event the client should listen for as a result of this action
     */
    emits?: string;
    /**
     * Authentication requirement
     */
    auth?: SocketAuthType;
}
export declare const SocketEvent: (options: string | SocketEventOptions) => MethodDecorator;
//# sourceMappingURL=socket-event.decorator.d.ts.map