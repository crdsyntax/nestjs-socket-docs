export interface SocketEventOptions {
    event: string;
    summary?: string;
    description?: string;
    response?: any;
}
export declare const SocketEvent: (options: string | SocketEventOptions) => MethodDecorator;
//# sourceMappingURL=socket-event.decorator.d.ts.map