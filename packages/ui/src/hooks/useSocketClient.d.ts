import { ConnectedState, LogEntry } from "../types";
declare const useSocketClient: () => {
    connected: ConnectedState;
    logs: LogEntry[];
    connect: (gatewayName: string, namespace: string, path?: string) => void;
    emitEvent: (gatewayName: string, event: string, payload: string) => void;
    clearLogs: () => void;
};
export default useSocketClient;
