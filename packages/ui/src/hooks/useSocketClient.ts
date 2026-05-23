import { useState, useCallback, useEffect } from "react";
import { ConnectedState, LogEntry, LogType } from "../types";
import { socketService, SocketConfig } from "../services/socket.service";

export interface UseSocketClientOptions extends SocketConfig {
  auth?: Record<string, any>;
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
    setConnected((prevConnected) => {
      if (prevConnected[gatewayName]) {
        socketService.disconnect(gatewayName);
        addLog("error", `Disconnected from ${namespace}`);
        return { ...prevConnected, [gatewayName]: false };
      }

      const mergedOptions: SocketConfig = {
        ...options,
        options: {
          path: path ?? "/socket.io",
          auth: options.auth,
          ...options.options,
        }
      };

      socketService.connect(gatewayName, namespace, mergedOptions, {
        onConnect: () => {
          setConnected((curr) => ({ ...curr, [gatewayName]: true }));
          addLog("received", `Connected to ${namespace}`);
        },
        onDisconnect: () => {
          setConnected((curr) => ({ ...curr, [gatewayName]: false }));
          addLog("error", `Disconnected from ${namespace}`);
        },
        onConnectError: (err) => {
          setConnected((curr) => ({ ...curr, [gatewayName]: false }));
          addLog("error", `Connection Error: ${err.message}`);
        },
        onAny: (event, ...args) => {
          addLog("received", `Event: ${event}`, args);
        },
      });

      return prevConnected; // State will be updated by callbacks
    });
  }, [options, addLog]);

  const emitEvent = useCallback((gatewayName: string, event: string, payload: string) => {
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
    emitEvent,
    clearLogs,
  };
};

export default useSocketClient;
