import { SocketDocsGateway } from "../types";
interface GatewayPanelProps {
    gateways: SocketDocsGateway[];
    activeGatewayIdx: number;
    activeEventIdx: number;
    onSelectGateway: (idx: number) => void;
    onSelectEvent: (idx: number) => void;
}
declare const GatewayPanel: ({ gateways, activeGatewayIdx, activeEventIdx, onSelectGateway, onSelectEvent, }: GatewayPanelProps) => import("react/jsx-runtime").JSX.Element;
export default GatewayPanel;
