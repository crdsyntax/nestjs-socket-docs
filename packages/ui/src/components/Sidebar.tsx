import React from "react";
import GatewayPanel from "./GatewayPanel";
import { translations } from "../locales/es";

interface SidebarProps {
  gateways: any[];
  activeGatewayIdx: number;
  activeEventIdx: number;
  onSelectGateway: (idx: number) => void;
  onSelectEvent: (idx: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onExport: () => void;
}

const Sidebar = ({
  gateways,
  activeGatewayIdx,
  activeEventIdx,
  onSelectGateway,
  onSelectEvent,
  searchQuery,
  onSearchChange,
  onExport,
}: SidebarProps) => {
  return (
    <aside className="flex w-[300px] flex-col border-r border-border-subtle bg-bg-primary p-4">
      <div className="mb-6 flex items-center gap-2">
        <span className="text-xl text-brand-emerald">■</span>
        <span className="text-base font-semibold">{translations.common.socketDocs}</span>
        <span className="rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary">{translations.common.v1}</span>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          className="w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none"
          placeholder={translations.common.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted">⌘K</span>
      </div>

      <div className="mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
        <span>{translations.common.gateways}</span>
        <span className="rounded bg-bg-surface px-1.5 py-0.5 text-[11px]">{gateways.length}</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        <GatewayPanel
          gateways={gateways}
          activeGatewayIdx={activeGatewayIdx}
          activeEventIdx={activeEventIdx}
          onSelectGateway={onSelectGateway}
          onSelectEvent={onSelectEvent}
        />
      </div>

      <div className="mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted">
        <button 
          onClick={onExport}
          className="mb-3 flex w-full items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation py-2 text-text-primary transition hover:bg-border-subtle"
        >
          ↓ {translations.common.exportContract}
        </button>
        <p>{translations.common.socketDocs} {translations.common.v1}</p>
        <p>{translations.common.madeWith}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
