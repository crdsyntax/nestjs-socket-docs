export interface SocketControllerOptions {
    name: string;
    description?: string;
}
export declare const SocketController: (options: string | SocketControllerOptions) => ClassDecorator;
