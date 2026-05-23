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
export declare const SocketEvent: (options: string | SocketEventOptions) => MethodDecorator;
//# sourceMappingURL=socket-event.decorator.d.ts.map