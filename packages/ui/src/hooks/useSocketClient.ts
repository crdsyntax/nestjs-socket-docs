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

    socketService.connect(gatewayName, namespace, mergedOptions, {
      onConnect: () => {
        setConnected((curr) => ({ ...curr, [gatewayName]: true }));
        addLog("received", `Connected to ${namespace}`);
      },
      onDisconnect: (reason) => {
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
    const maxAttempts = (options as any).eventRetries?.attempts ?? 0;
    const retryDelay = (options as any).eventRetries?.delay ?? 1000;

    const attemptEmit = (currentAttempt: number) => {
      try {
        const parsedPayload = JSON.parse(payload);
        const attemptLabel = currentAttempt > 0 ? ` (Reintento ${currentAttempt}/${maxAttempts})` : "";
        addLog("sent", `Emitting ${event}${attemptLabel}`, parsedPayload);

        let ackReceived = false;
        const timer = setTimeout(() => {
          if (!ackReceived && currentAttempt < maxAttempts) {
            addLog("error", `Timeout esperando ACK para ${event}. Reintentando en ${retryDelay}ms...`);
            setTimeout(() => attemptEmit(currentAttempt + 1), retryDelay);
          } else if (!ackReceived && maxAttempts > 0) {
            addLog("error", `Fallo final: No se recibió ACK para ${event} después de ${maxAttempts} reintentos.`);
          }
        }, options.options?.timeout ?? 20000);

        socketService.emit(gatewayName, event, parsedPayload, (ack: unknown) => {
          ackReceived = true;
          clearTimeout(timer);
          addLog("received", `ACK for ${event}`, ack);
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Invalid JSON";
        console.error(`Emit error: ${message}`);
        addLog("error", `Error de emisión: ${message}`);
      }
    };

    attemptEmit(0);
  }, [options, addLog]);

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
