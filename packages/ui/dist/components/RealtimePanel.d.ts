import React from "react";
import { LogEntry } from "../types";
interface RealtimePanelProps {
    connected: boolean;
    logs: LogEntry[];
    onClear: () => void;
    isPaused: boolean;
    onTogglePause: () => void;
}
declare const RealtimePanel: ({ connected, logs, onClear, isPaused, onTogglePause, }: RealtimePanelProps) => React.JSX.Element;
export default RealtimePanel;
