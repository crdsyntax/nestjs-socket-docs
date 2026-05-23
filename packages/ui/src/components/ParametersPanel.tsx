import React from "react";
import { translations } from "../locales/es";

interface ParametersPanelProps {
  connected: boolean;
  onConnect: () => void;
}

const ParametersPanel = ({ connected, onConnect }: ParametersPanelProps) => {
  return (
    <div className="mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface">
      <div className="flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3">
        <span className="text-[13px] font-semibold">{translations.event.parameters}</span>
        <button
          onClick={onConnect}
          className="rounded bg-brand-emerald px-3 py-1 text-[12px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light"
        >
          {connected ? translations.event.reconnect : translations.event.connect}
        </button>
      </div>
      <div className="p-4 italic text-text-secondary">
        {translations.event.noParameters}
      </div>
    </div>
  );
};

export default ParametersPanel;
