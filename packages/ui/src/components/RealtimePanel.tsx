import React from "react";
import { RotateCcw } from "lucide-react";
import LogsPanel from "./LogsPanel";
import { translations } from "../locales/es";

import { LogEntry } from "../types";

interface RealtimePanelProps {
  connected: boolean;
  logs: LogEntry[];
  onClear: () => void;
  isPaused: boolean;
  onTogglePause: () => void;
}

const RealtimePanel = ({
  connected,
  logs,
  onClear,
  isPaused,
  onTogglePause,
}: RealtimePanelProps) => {
  const [activeTab, setActiveTab] = React.useState<"all" | "emits" | "listeners">("all");

  const filteredLogs = React.useMemo(() => {
    if (activeTab === "all") return logs;
    if (activeTab === "emits") return logs.filter(log => log.type === "sent");
    if (activeTab === "listeners") return logs.filter(log => log.type === "received");
    return logs;
  }, [logs, activeTab]);

  return (
    <div className="flex flex-col rounded-lg border border-border-subtle bg-bg-surface">
      <div className="flex flex-shrink-0 items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${connected ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}`} />
            <span className="text-[13px] font-semibold">{translations.realtime.title}</span>
          </div>

          <div className="flex items-center gap-1 rounded-md bg-bg-secondary p-0.5">
            <button
              onClick={() => setActiveTab("all")}
              className={`rounded px-2 py-0.5 text-[11px] font-medium transition ${
                activeTab === "all"
                  ? "bg-bg-surface text-brand-emerald shadow-sm"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {translations.realtime.all}
            </button>
            <button
              onClick={() => setActiveTab("emits")}
              className={`rounded px-2 py-0.5 text-[11px] font-medium transition ${
                activeTab === "emits"
                  ? "bg-bg-surface text-brand-emerald shadow-sm"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {translations.realtime.emits}
            </button>
            <button
              onClick={() => setActiveTab("listeners")}
              className={`rounded px-2 py-0.5 text-[11px] font-medium transition ${
                activeTab === "listeners"
                  ? "bg-bg-surface text-brand-emerald shadow-sm"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {translations.realtime.listeners}
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={onClear} className="flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle">
            <RotateCcw size={12} /> {translations.realtime.clear}
          </button>
          <button 
            onClick={onTogglePause}
            className={`rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${isPaused ? "bg-brand-emerald-dim text-brand-emerald" : ""}`}
          >
            {isPaused ? "Continuar" : translations.realtime.pause}
          </button>
        </div>
      </div>
      <div className="border-t border-border-subtle">
        <LogsPanel logs={isPaused ? [] : filteredLogs} onClear={onClear} />
      </div>
    </div>
  );
};

export default RealtimePanel;
