import React from "react";
import { translations } from "../locales/es";

interface ParametersPanelProps {
  connected: boolean;
  schema?: any;
  onConnect: () => void;
}

const ParametersPanel = ({ connected, schema, onConnect }: ParametersPanelProps) => {
  const properties = schema?.properties || {};
  const propKeys = Object.keys(properties);
  const requiredFields = schema?.required || [];

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
      
      {propKeys.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border-subtle bg-bg-primary/30 text-text-muted">
                <th className="px-4 py-2 font-medium">Name</th>
                <th className="px-4 py-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {propKeys.map((key) => {
                const prop = properties[key];
                const isRequired = requiredFields.includes(key);
                return (
                  <tr key={key} className="hover:bg-bg-primary/20">
                    <td className="px-4 py-3">
                      <div className="font-mono font-bold text-text-primary">
                        {key}
                        {isRequired && <span className="ml-1 text-red-400">*</span>}
                      </div>
                      <div className="text-[11px] text-text-muted italic">
                        {prop.type}
                        {prop.format ? `(${prop.format})` : ""}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-text-secondary leading-relaxed">
                      {prop.description || "No description."}
                      {prop.enum && (
                        <div className="mt-1 flex flex-wrap gap-1">
                          <span className="text-[10px] uppercase font-bold text-text-muted">Enum:</span>
                          {prop.enum.map((val: any) => (
                            <span key={val} className="rounded bg-bg-elevation px-1 py-0.5 text-[10px] font-mono text-brand-emerald">
                              {val}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-4 italic text-text-secondary">
          {translations.event.noParameters}
        </div>
      )}
    </div>
  );
};

export default ParametersPanel;
