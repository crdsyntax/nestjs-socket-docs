interface MainHeaderProps {
    connected: boolean;
    gatewayPath: string;
    namespace: string;
    theme: "dark" | "light";
    onToggleTheme: () => void;
}
declare const MainHeader: ({ connected, gatewayPath, namespace, theme, onToggleTheme, }: MainHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default MainHeader;
