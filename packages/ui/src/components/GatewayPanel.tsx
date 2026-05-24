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
              className="flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary"
              onClick={() => onToggleExpand(gateway.name)}
            >
              <div className="flex items-center gap-2">
                <span className="text-text-muted">📁</span>
                {gateway.name}
              </div>
              <span className={`text-[11px] text-text-muted transition-transform ${isExpanded ? "" : "-rotate-90"}`}>
                {gateway.namespace} ▾
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
                      <span className="inline-block w-[42px] rounded bg-bg-surface py-0.5 text-center font-mono text-[10px] font-bold text-brand-emerald">
                        EVENT
                      </span>
                      <span className="truncate">{event.event}</span>
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
