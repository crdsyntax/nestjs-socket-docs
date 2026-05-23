import { io, Socket, ManagerOptions, SocketOptions } from "socket.io-client";

export interface SocketConfig {
  options?: Partial<ManagerOptions & SocketOptions>;
}

export class SocketService {
  private sockets: Record<string, Socket> = {};

  connect(
    gatewayName: string,
    namespace: string,
    config: SocketConfig = {},
    callbacks: {
      onConnect: () => void;
      onDisconnect: () => void;
      onConnectError: (err: Error) => void;
      onAny: (event: string, ...args: any[]) => void;
    }
  ): Socket {
    if (this.sockets[gatewayName]) {
      this.sockets[gatewayName].disconnect();
    }

    // Ensure we handle nested options correctly
    const socketOptions: Partial<ManagerOptions & SocketOptions> = {
      transports: ["polling", "websocket"],
      forceNew: true,
      ...config.options,
    };

    const socket = io(namespace, socketOptions);

    socket.on("connect", callbacks.onConnect);
    socket.on("connect_error", (err) => callbacks.onConnectError(err as Error));
    socket.on("disconnect", callbacks.onDisconnect);
    socket.onAny(callbacks.onAny);

    this.sockets[gatewayName] = socket;
    return socket;
  }

  disconnect(gatewayName: string) {
    if (this.sockets[gatewayName]) {
      this.sockets[gatewayName].disconnect();
      delete this.sockets[gatewayName];
    }
  }

  emit(gatewayName: string, event: string, payload: any, ack?: (response: any) => void) {
    const socket = this.sockets[gatewayName];
    if (!socket) throw new Error("Socket not connected");
    
    if (ack) {
      socket.emit(event, payload, ack);
    } else {
      socket.emit(event, payload);
    }
  }

  getSocket(gatewayName: string): Socket | undefined {
    return this.sockets[gatewayName];
  }
}

export const socketService = new SocketService();
