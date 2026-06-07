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
declare const GatewayPanel: ({ gateways, activeGatewayIdx, activeEventIdx, onSelectGateway, onSelectEvent, expanded, onToggleExpand, }: GatewayPanelProps) => import("react").JSX.Element;
export default GatewayPanel;
