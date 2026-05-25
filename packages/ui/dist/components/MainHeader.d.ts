interface MainHeaderProps {
    connected: boolean;
    gatewayPath: string;
    namespace: string;
    namespaces: string[];
    theme: "dark" | "light";
    onToggleTheme: () => void;
    onOpenSettings?: () => void;
    onNamespaceChange: (ns: string) => void;
}
declare const MainHeader: ({ connected, gatewayPath, namespace, namespaces, theme, onToggleTheme, onOpenSettings, onNamespaceChange, }: MainHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default MainHeader;
