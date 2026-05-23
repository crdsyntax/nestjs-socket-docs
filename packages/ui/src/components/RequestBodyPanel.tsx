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
  const [activeTab, setActiveTab] = useState<"example" | "schema">("example");
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
            onClick={() => setActiveTab("example")}
            className={`cursor-pointer pb-1.5 transition-colors ${activeTab === "example" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`}
          >
            {translations.event.exampleValue}
          </span>
          <span 
            onClick={() => setActiveTab("schema")}
            className={`cursor-pointer pb-1.5 transition-colors ${activeTab === "schema" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`}
          >
            Request Schema
          </span>
          {responseSchema && (
            <span 
              onClick={() => setActiveTab("schema")} // We'll keep it simple for now, maybe show both or a toggle
              className="text-text-muted cursor-default ml-auto text-[11px] uppercase font-bold"
            >
              Response schema available
            </span>
          )}
        </div>
        
        {activeTab === "example" ? (
          <div className="space-y-4">
            <textarea
              value={payload}
              onChange={(e) => onChange(e.target.value)}
              className="w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald"
              rows={8}
            />
            {responseSchema && (
               <div className="rounded border border-border-subtle bg-bg-primary/50 p-3">
                  <div className="text-[11px] font-bold text-text-muted uppercase mb-2">Expected Response Schema</div>
                  <pre className="text-[11px] text-text-secondary overflow-x-auto max-h-40">{JSON.stringify(responseSchema, null, 2)}</pre>
               </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] font-bold text-text-muted uppercase mb-2">Request</div>
              <div className="rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[12px] leading-relaxed text-text-secondary overflow-x-auto max-h-[300px]">
                <pre>{JSON.stringify(schema, null, 2)}</pre>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-text-muted uppercase mb-2">Response</div>
              <div className="rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[12px] leading-relaxed text-text-secondary overflow-x-auto max-h-[300px]">
                <pre>{responseSchema ? JSON.stringify(responseSchema, null, 2) : "No response schema defined."}</pre>
              </div>
            </div>
          </div>
        )}

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
