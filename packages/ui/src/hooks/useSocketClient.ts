import { useState, useCallback, useEffect } from "react";
import { ConnectedState, LogEntry, LogType } from "../types";
import { socketService, SocketConfig } from "../services/socket.service";

export interface UseSocketClientOptions extends SocketConfig {
  auth?: Record<string, unknown>;
}

const useSocketClient = (options: UseSocketClientOptions = {}) => {
  const [connected, setConnected] = useState<ConnectedState>({});
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = useCallback((type: LogType, message: string, data?: unknown) => {
    setLogs((prev) =>
      [
        {
          id: Date.now(),
          timestamp: new Date().toLocaleTimeString(),
          type,
          message,
          data,
        },
        ...prev,
      ].slice(0, 50),
    );
  }, []);

  const connect = useCallback((gatewayName: string, namespace: string, path?: string) => {
    const mergedOptions: SocketConfig = {
      ...options,
      options: {
        path: path ?? "/socket.io",
        auth: options.auth,
        ...options.options,
      }
    };

    console.log(`[SocketDocs] Connecting to ${gatewayName} at ${namespace}...`, mergedOptions.options);

    socketService.connect(gatewayName, namespace, mergedOptions, {
      onConnect: () => {
        console.log(`[SocketDocs] Connected to ${gatewayName}`);
        setConnected((curr) => ({ ...curr, [gatewayName]: true }));
        addLog("received", `Connected to ${namespace}`);
      },
      onDisconnect: (reason) => {
        console.log(`[SocketDocs] Disconnected from ${gatewayName}: ${reason}`);
        setConnected((curr) => ({ ...curr, [gatewayName]: false }));
        addLog("error", `Disconnected from ${namespace} (${reason})`);
      },
      onConnectError: (err) => {
        console.error(`[SocketDocs] Connection error for ${gatewayName}:`, err);
        setConnected((curr) => ({ ...curr, [gatewayName]: false }));
        addLog("error", `Connection Error: ${err.message}`);
      },
      onAny: (event: string, ...args: unknown[]) => {
        addLog("received", `Event: ${event}`, args);
      },
    });
  }, [options, addLog]);

  const disconnect = useCallback((gatewayName: string, namespace?: string) => {
    socketService.disconnect(gatewayName);
    setConnected((curr) => ({ ...curr, [gatewayName]: false }));
    addLog("error", `Disconnected from ${namespace || gatewayName}`);
  }, [addLog]);

  const emitEvent = useCallback((gatewayName: string, event: string, payload: string) => {
// ...
    try {
      const parsedPayload = JSON.parse(payload);
      addLog("sent", `Emitting ${event}`, parsedPayload);

      socketService.emit(gatewayName, event, parsedPayload, (ack: unknown) => {
        addLog("received", `ACK for ${event}`, ack);
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Invalid JSON";
      console.error(`Emit error: ${message}`);
    }
  }, [addLog]);

  const clearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  return {
    connected,
    logs,
    connect,
    disconnect,
    emitEvent,
    clearLogs,
  };
};

export default useSocketClient;
