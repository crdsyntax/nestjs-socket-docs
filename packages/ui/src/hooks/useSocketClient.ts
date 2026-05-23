import { useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { ConnectedState, LogEntry, LogType } from "../types";

const useSocketClient = () => {
  const [connected, setConnected] = useState<ConnectedState>({});
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const socketRef = useRef<Record<string, Socket>>({});

  const addLog = (type: LogType, message: string, data?: unknown) => {
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
  };

  const connect = (gatewayName: string, namespace: string, path?: string) => {
    if (socketRef.current[gatewayName]) {
      socketRef.current[gatewayName].disconnect();
      delete socketRef.current[gatewayName];
      setConnected((prev) => ({ ...prev, [gatewayName]: false }));
      addLog("error", `Disconnected from ${namespace}`);
      return;
    }

    const socket = io(namespace, {
      path: path ?? "/socket.io",
      transports: ["polling", "websocket"],
      forceNew: true,
    });

    socket.on("connect", () => {
      setConnected((prev) => ({ ...prev, [gatewayName]: true }));
      addLog("received", `Connected to ${namespace}`);
    });

    socket.on("connect_error", (err) => {
      addLog("error", `Connection Error: ${err.message}`);
    });

    socket.on("disconnect", () => {
      setConnected((prev) => ({ ...prev, [gatewayName]: false }));
      addLog("error", `Disconnected from ${namespace}`);
    });

    socket.onAny((event, ...args) => {
      addLog("received", `Event: ${event}`, args);
    });

    socketRef.current[gatewayName] = socket;
  };

  const emitEvent = (gatewayName: string, event: string, payload: string) => {
    const socket = socketRef.current[gatewayName];

    if (!socket) {
      alert("Connect first!");
      return;
    }

    try {
      const parsedPayload = JSON.parse(payload);
      addLog("sent", `Emitting ${event}`, parsedPayload);

      socket.emit(event, parsedPayload, (ack: unknown) => {
        addLog("received", `ACK for ${event}`, ack);
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Invalid JSON";
      alert(`Invalid JSON: ${message}`);
    }
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return {
    connected,
    logs,
    connect,
    emitEvent,
    clearLogs,
  };
};

export default useSocketClient;
