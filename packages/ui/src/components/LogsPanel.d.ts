import { LogEntry } from "../types";
interface LogsPanelProps {
    logs: LogEntry[];
    onClear: () => void;
}
declare const LogsPanel: ({ logs }: LogsPanelProps) => import("react/jsx-runtime").JSX.Element;
export default LogsPanel;
