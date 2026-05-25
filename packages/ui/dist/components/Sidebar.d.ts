interface SidebarProps {
    gateways: any[];
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
declare const Sidebar: ({ gateways, activeGatewayIdx, activeEventIdx, onSelectGateway, onSelectEvent, searchQuery, onSearchChange, onExport, expanded, onToggleExpand, }: SidebarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
