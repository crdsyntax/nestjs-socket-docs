export interface ApiConfig {
    baseUrl: string;
    jsonPath: string;
}
export interface SocketConfig {
    namespace: string;
    path: string;
    transports: ("polling" | "websocket")[];
    reconnection: boolean;
    reconnectionAttempts: number;
    reconnectionDelay: number;
    reconnectionDelayMax: number;
    timeout: number;
    autoConnect: boolean;
    randomizationFactor: number;
    auth: {
        token: string;
        userId: string;
    };
}
interface SettingsModalProps {
    show: boolean;
    onClose: () => void;
    onSave: (api: ApiConfig, socket: SocketConfig) => void;
    initialApiConfig: ApiConfig;
    initialSocketConfig: SocketConfig;
    isStandalone: boolean;
    theme: "dark" | "light";
    activeGatewayNamespace?: string;
}
declare const SettingsModal: ({ show, onClose, onSave, initialApiConfig, initialSocketConfig, isStandalone, theme, activeGatewayNamespace }: SettingsModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default SettingsModal;
