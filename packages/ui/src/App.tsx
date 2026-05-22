import React, { useState } from "react";
import GatewayPanel from "./components/GatewayPanel";
import LogsPanel from "./components/LogsPanel";
import LoadingScreen from "./components/LoadingScreen";
import useSocketClient from "./hooks/useSocketClient";
import useSocketDocs from "./hooks/useSocketDocs";
import { Play, RotateCcw, Settings, Sun } from "lucide-react";

const App = () => {
  const { data, payloads, setPayloads } = useSocketDocs();
  const { connected, logs, connect, emitEvent, clearLogs } = useSocketClient();
  const [activeGatewayIdx, setActiveGatewayIdx] = useState(0);
  const [activeEventIdx, setActiveEventIdx] = useState(0);

  if (!data) {
    return <LoadingScreen />;
  }

  const activeGateway = data.gateways[activeGatewayIdx];
  const activeEvent = activeGateway?.events?.[activeEventIdx];
  const eventKey = activeGateway && activeEvent ? `${activeGateway.name}-${activeEvent.event}` : "";

  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary font-sans text-text-primary">
      {/* SIDEBAR */}
      <aside className="flex w-[300px] flex-col border-r border-border-subtle bg-bg-primary p-4">
        <div className="mb-6 flex items-center gap-2">
          <span className="text-xl text-brand-emerald">■</span>
          <span className="text-base font-semibold">Socket Docs</span>
          <span className="rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary">v1.0.0</span>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            className="w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none"
            placeholder="Buscar eventos..."
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted">⌘K</span>
        </div>

        <div className="mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
          <span>Gateways</span>
          <span className="rounded bg-bg-surface px-1.5 py-0.5 text-[11px]">{data.gateways.length}</span>
        </div>

        <div className="flex-1 overflow-y-auto">
          <GatewayPanel
            gateways={data.gateways}
            activeGatewayIdx={activeGatewayIdx}
            activeEventIdx={activeEventIdx}
            onSelectGateway={setActiveGatewayIdx}
            onSelectEvent={setActiveEventIdx}
          />
        </div>

        <div className="mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted">
          <button className="mb-3 flex w-full items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation py-2 text-text-primary transition hover:bg-border-subtle">
            ↓ Exportar contrato
          </button>
          <p>Socket Docs v1.0.0</p>
          <p>Hecho con 💚 para NestJS</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex flex-1 flex-col overflow-y-auto bg-bg-secondary">
        <div className="flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6">
          <div className="flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs">
            <div className={`h-2 w-2 rounded-full ${connected[activeGateway?.name] ? "bg-brand-emerald" : "bg-red-500"}`} />
            <span>{connected[activeGateway?.name] ? "Conectado" : "Desconectado"}</span>
            <span className="text-text-muted">{activeGateway?.path ?? "ws://localhost:3000"}</span>
          </div>
          <select className="rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none">
            <option>{activeGateway?.namespace ?? "/"}</option>
          </select>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle">
            <Sun size={14} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle">
            <Settings size={14} />
          </button>
        </div>

        <div className="mx-auto w-full max-w-[1200px] p-6">
          <div className="mb-4 flex gap-2 text-sm text-text-secondary">
            <span>{activeGateway?.name ?? "..."}</span> / <span>events</span> / <span className="font-medium text-text-primary">{activeEvent?.event ?? "..."}</span>
          </div>

          <div className="mb-2 flex items-center gap-3">
            <span className="rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald">EVENT</span>
            <span className="font-mono text-xl font-semibold">{activeEvent?.event}</span>
            <span className="text-sm text-text-secondary">{activeEvent?.summary}</span>
          </div>

          <p className="mb-6 leading-relaxed text-text-secondary">
            {activeEvent?.description ?? "No description provided for this event."}
          </p>

          {/* Parameters Panel */}
          <div className="mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface">
            <div className="flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3">
              <span className="text-[13px] font-semibold">Parameters</span>
              <button
                onClick={() => connect(activeGateway.name, activeGateway.namespace, activeGateway.path)}
                className="rounded bg-brand-emerald px-3 py-1 text-[12px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light"
              >
                {connected[activeGateway.name] ? "Reconnect" : "Connect"}
              </button>
            </div>
            <div className="p-4 italic text-text-secondary">
              No parameters defined
            </div>
          </div>

          {/* Request Body Panel */}
          <div className="mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface">
            <div className="flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3">
              <span className="text-[13px] font-semibold">
                Request body <span className="text-[11px] text-red-400">required</span>
              </span>
              <select className="rounded border border-border-subtle bg-bg-surface px-2 py-0.5 text-xs">
                <option>application/json</option>
              </select>
            </div>
            <div className="p-4">
              <div className="mb-3 flex gap-4 border-b border-border-subtle pb-2 text-[13px]">
                <span className="cursor-pointer border-b-2 border-brand-emerald pb-1.5 text-brand-emerald">Example Value</span>
                <span className="cursor-pointer pb-1.5 text-text-secondary">Schema</span>
              </div>
              <textarea
                value={payloads[eventKey] ?? "{}"}
                onChange={(e) => setPayloads({ ...payloads, [eventKey]: e.target.value })}
                className="w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald"
                rows={6}
              />
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => emitEvent(activeGateway.name, activeEvent.event, payloads[eventKey] ?? "{}")}
                  className="flex items-center gap-2 rounded bg-brand-emerald px-4 py-2 text-[13px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light"
                >
                  <Play size={14} /> Enviar evento
                </button>
                <label className="flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary">
                  <input type="checkbox" className="rounded border-border-subtle bg-bg-surface" /> Incluir ACK
                </label>
              </div>
            </div>
          </div>

          {/* Realtime Panel */}
          <div className="mt-6 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${connected[activeGateway?.name] ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}`} />
                <span className="text-[13px] font-semibold">Respuesta en tiempo real</span>
              </div>
              <div className="flex gap-2">
                <button onClick={clearLogs} className="flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle">
                  <RotateCcw size={12} /> Limpiar
                </button>
                <button className="rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle">
                  Pausar
                </button>
              </div>
            </div>
            <div className="min-h-[200px] border-t border-border-subtle">
              <LogsPanel logs={logs} onClear={clearLogs} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
