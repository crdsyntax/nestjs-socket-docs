import React, { useState } from "react";
import { Play } from "lucide-react";
import { translations } from "../locales/es";

interface RequestBodyPanelProps {
  payload: string;
  schema?: any;
  responseSchema?: any;
  emits?: string;
  onChange: (val: string) => void;
  onSend: () => void;
}

const RequestBodyPanel = ({ payload, schema, responseSchema, emits, onChange, onSend }: RequestBodyPanelProps) => {
  const [expectedEvent, setExpectedEvent] = useState(emits || "");

  // Update expectedEvent when event changes
  React.useEffect(() => {
    setExpectedEvent(emits || "");
  }, [emits]);

  return (
    <div className="mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface">
      <div className="flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] font-semibold">
            {translations.event.requestBody} <span className="text-[11px] text-red-400">{translations.event.required}</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-text-muted">Listen for:</span>
            <input 
              type="text" 
              value={expectedEvent}
              onChange={(e) => setExpectedEvent(e.target.value)}
              placeholder="Event name..."
              className="bg-bg-primary border border-border-subtle rounded px-2 py-0.5 text-[11px] text-brand-emerald outline-none focus:border-brand-emerald w-40"
            />
          </div>
        </div>
        <select className="rounded border border-border-subtle bg-bg-surface px-2 py-0.5 text-xs">
          <option>application/json</option>
        </select>
      </div>
      <div className="p-4">
        <div className="mb-3 flex gap-4 border-b border-border-subtle pb-2 text-[13px]">
          <span 
            className="pb-1.5 border-b-2 border-brand-emerald text-brand-emerald font-medium"
          >
            {translations.event.exampleValue}
          </span>
        </div>
        
        <div className="space-y-4">
          <textarea
            value={payload}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald"
            rows={8}
          />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={onSend}
            className="flex items-center gap-2 rounded bg-brand-emerald px-4 py-2 text-[13px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light"
          >
            <Play size={14} /> {translations.event.sendEvent}
          </button>
          <label className="flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary">
            <input type="checkbox" className="rounded border-border-subtle bg-bg-surface" /> {translations.event.includeAck}
          </label>
        </div>
      </div>
    </div>
  );
};

export default RequestBodyPanel;
