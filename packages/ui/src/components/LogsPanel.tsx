import { LogEntry } from "../types";

interface LogsPanelProps {
  logs: LogEntry[];
  onClear: () => void;
}

const LogsPanel = ({ logs }: LogsPanelProps) => {
  if (logs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center text-text-muted">
        <div className="mb-2 text-2xl">(( ∙ ))</div>
        <p className="text-[13px]">Envía un evento para ver la respuesta...</p>
      </div>
    );
  }

  return (
    <div className="space-y-2 p-4">
      {logs.map((log) => (
        <div
          key={log.id}
          className="rounded border border-border-subtle bg-bg-primary p-3 text-[12px]"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`font-bold ${
                log.type === "sent" ? "text-blue-400" : 
                log.type === "received" ? "text-brand-emerald" : 
                "text-red-400"
              }`}>
                {log.type.toUpperCase()}
              </span>
              <span className="text-text-secondary">{log.message}</span>
            </div>
            <span className="text-[10px] text-text-muted">{log.timestamp}</span>
          </div>
          {log.data != null && (
            <pre className="whitespace-pre-wrap break-all overflow-x-hidden rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary">
              {JSON.stringify(log.data, null, 2)}
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default LogsPanel;
