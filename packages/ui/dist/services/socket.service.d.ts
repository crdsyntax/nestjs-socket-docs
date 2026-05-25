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
        onAny: (event: string, ...args: any[]) => void;
    }): Socket;
    disconnect(gatewayName: string): void;
    emit(gatewayName: string, event: string, payload: any, ack?: (response: any) => void): void;
    getSocket(gatewayName: string): Socket | undefined;
}
export declare const socketService: SocketService;
