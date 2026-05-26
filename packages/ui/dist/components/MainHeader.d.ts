interface MainHeaderProps {
    connected: boolean;
    gatewayPath: string;
    namespace: string;
    namespaces: string[];
    theme: "dark" | "light";
    onToggleTheme: () => void;
    onOpenSettings?: () => void;
    onNamespaceChange: (ns: string) => void;
    onConnect: () => void;
}
declare const MainHeader: ({ connected, gatewayPath, namespace, namespaces, theme, onToggleTheme, onOpenSettings, onNamespaceChange, onConnect, }: MainHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default MainHeader;
