import React from "react";
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
declare const Sidebar: ({ gateways, activeGatewayIdx, activeEventIdx, onSelectGateway, onSelectEvent, searchQuery, onSearchChange, onExport, expanded, onToggleExpand, }: SidebarProps) => React.JSX.Element;
export default Sidebar;
