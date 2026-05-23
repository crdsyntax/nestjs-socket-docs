import React from "react";
import { RotateCcw } from "lucide-react";
import LogsPanel from "./LogsPanel";
import { translations } from "../locales/es";

interface RealtimePanelProps {
  connected: boolean;
  logs: any[];
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
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${connected ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}`} />
          <span className="text-[13px] font-semibold">{translations.realtime.title}</span>
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
      <div className="min-h-[200px] border-t border-border-subtle">
        <LogsPanel logs={isPaused ? [] : logs} onClear={onClear} />
      </div>
    </div>
  );
};

export default RealtimePanel;
