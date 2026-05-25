import { ConnectedState, LogEntry } from "../types";
import { SocketConfig } from "../services/socket.service";
export interface UseSocketClientOptions extends SocketConfig {
    auth?: Record<string, any>;
}
declare const useSocketClient: (options?: UseSocketClientOptions) => {
    connected: ConnectedState;
    logs: LogEntry[];
    connect: (gatewayName: string, namespace: string, path?: string) => void;
    emitEvent: (gatewayName: string, event: string, payload: string) => void;
    clearLogs: () => void;
};
export default useSocketClient;
