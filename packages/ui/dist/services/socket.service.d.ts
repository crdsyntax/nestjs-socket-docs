import { Socket, ManagerOptions, SocketOptions } from "socket.io-client";
export interface SocketConfig {
    options?: Partial<ManagerOptions & SocketOptions>;
}
export declare class SocketService {
    private sockets;
    connect(gatewayName: string, namespace: string, config: SocketConfig | undefined, callbacks: {
        onConnect: () => void;
        onDisconnect: (reason: string) => void;
        onConnectError: (err: Error) => void;
        onAny: (event: string, ...args: unknown[]) => void;
    }): Socket;
    disconnect(gatewayName: string): void;
    emit(gatewayName: string, event: string, payload: unknown, ack?: (response: unknown) => void): void;
    getSocket(gatewayName: string): Socket | undefined;
}
export declare const socketService: SocketService;
