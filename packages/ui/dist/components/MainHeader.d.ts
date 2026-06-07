interface MainHeaderProps {
    connected: boolean;
    gatewayPath: string;
    namespace: string;
    namespaces: string[];
    path: string;
    paths: string[];
    theme: "dark" | "light";
    onToggleTheme: () => void;
    onOpenSettings?: () => void;
    onNamespaceChange: (ns: string) => void;
    onPathChange: (path: string) => void;
    onConnect: () => void;
}
declare const MainHeader: ({ connected, gatewayPath, namespace, namespaces, path, paths, theme, onToggleTheme, onOpenSettings, onNamespaceChange, onPathChange, onConnect, }: MainHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default MainHeader;
