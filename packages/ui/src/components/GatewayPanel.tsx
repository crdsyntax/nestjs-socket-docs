import { SocketDocsGateway } from "../types";

interface GatewayPanelProps {
  gateways: SocketDocsGateway[];
  activeGatewayIdx: number;
  activeEventIdx: number;
  onSelectGateway: (idx: number) => void;
  onSelectEvent: (idx: number) => void;
  expanded: Record<string, boolean>;
  onToggleExpand: (key: string) => void;
}

const GatewayPanel = ({
  gateways,
  activeGatewayIdx,
  activeEventIdx,
  onSelectGateway,
  onSelectEvent,
  expanded,
  onToggleExpand,
}: GatewayPanelProps) => {
  return (
    <div className="space-y-4">
      {gateways.map((gateway, gIdx) => {
        const isExpanded = expanded[gateway.name] !== false; // Default to expanded
        
        return (
          <div key={gIdx} className="nav-group">
            <div 
              className="flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary group"
              onClick={() => onToggleExpand(gateway.name)}
            >
              <div className="flex items-center gap-2">
                <span className="text-text-muted">📁</span>
                <div className="flex flex-col">
                  <span>{gateway.name}</span>
                  <span className="text-[10px] text-brand-emerald font-mono">
                    {gateway.namespace}
                  </span>
                </div>
              </div>
              <span className={`text-[11px] text-text-muted transition-transform ${isExpanded ? "" : "-rotate-90"}`}>
                ▾
              </span>
            </div>
            
            {isExpanded && (
              <ul className="mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2">
                {gateway.events.map((event, eIdx) => {
                  const isActive = activeGatewayIdx === gIdx && activeEventIdx === eIdx;
                  return (
                    <li
                      key={eIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectGateway(gIdx);
                        onSelectEvent(eIdx);
                      }}
                      className={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${
                        isActive 
                          ? "bg-brand-emerald-dim text-brand-emerald" 
                          : "text-text-secondary hover:bg-bg-secondary"
                      }`}
                    >
                      <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="inline-block rounded bg-bg-surface px-1.5 py-0.5 font-mono text-[9px] font-bold text-brand-emerald">
                            EVENT
                          </span>
                          <span className="truncate font-medium">{event.event}</span>
                        </div>
                        <span className="text-[10px] text-text-muted ml-[42px] truncate">
                          Namespace: {gateway.namespace}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GatewayPanel;
