import React, { useState } from "react";
import GatewayPanel from "./GatewayPanel";
import { translations } from "../locales/es";
import { ChevronLeft, ChevronRight, LayoutGrid, Search, Download } from "lucide-react";
import { SocketDocsGateway } from "../types";

interface SidebarProps {
  gateways: SocketDocsGateway[];
  activeGatewayIdx: number;
  activeEventIdx: number;
  onSelectGateway: (idx: number) => void;
  onSelectEvent: (idx: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onExport: () => void;
  expanded: Record<string, boolean>;
  onToggleExpand: (key: string) => void;
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
  expanded,
  onToggleExpand,
}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`relative flex h-full flex-col border-r border-border-subtle bg-bg-primary transition-all duration-300 ${isCollapsed ? 'w-16 p-2' : 'w-[300px] p-4'}`}>
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle bg-bg-primary text-text-primary shadow-sm hover:bg-bg-surface transition-colors"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div className={`mb-6 flex items-center ${isCollapsed ? 'justify-center' : 'gap-2'}`}>
        <span className="text-xl text-brand-emerald shrink-0">■</span>
        {!isCollapsed && (
          <>
            <span className="text-base font-semibold truncate">{translations.common.socketDocs}</span>
            <span className="rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary">{translations.common.v1}</span>
          </>
        )}
      </div>

      <div className="relative mb-6">
        {isCollapsed ? (
          <div className="flex justify-center text-text-muted cursor-pointer hover:text-text-primary" onClick={() => setIsCollapsed(false)}>
            <Search size={18} />
          </div>
        ) : (
          <>
            <input
              type="text"
              className="w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none"
              placeholder={translations.common.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted">⌘K</span>
          </>
        )}
      </div>

      {!isCollapsed && (
        <div className="mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary px-1">
          <span>{translations.common.gateways}</span>
          <span className="rounded bg-bg-surface px-1.5 py-0.5 text-[11px]">{gateways.length}</span>
        </div>
      )}

      {isCollapsed && (
         <div className="mb-3 flex justify-center text-text-secondary">
            <LayoutGrid size={18} />
         </div>
      )}

      <div className={`flex-1 overflow-y-auto ${isCollapsed ? 'hidden' : 'block'}`}>
        <GatewayPanel
          gateways={gateways}
          activeGatewayIdx={activeGatewayIdx}
          activeEventIdx={activeEventIdx}
          onSelectGateway={onSelectGateway}
          onSelectEvent={onSelectEvent}
          expanded={expanded}
          onToggleExpand={onToggleExpand}
        />
      </div>

      <div className={`mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted ${isCollapsed ? 'flex flex-col items-center gap-4' : ''}`}>
        <button 
          onClick={onExport}
          title={translations.common.exportContract}
          className={`flex items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation text-text-primary transition hover:bg-border-subtle ${isCollapsed ? 'h-9 w-9' : 'mb-3 w-full py-2'}`}
        >
          <Download size={14} />
          {!isCollapsed && translations.common.exportContract}
        </button>
        
        {!isCollapsed && (
          <p>{translations.common.socketDocs} {translations.common.v1}</p>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
