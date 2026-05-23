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
declare const Sidebar: ({ gateways, activeGatewayIdx, activeEventIdx, onSelectGateway, onSelectEvent, searchQuery, onSearchChange, onExport, }: SidebarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
