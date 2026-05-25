/// <reference types="react" />
import { SocketDocsData } from "../types";
export declare const useAppLogic: (data: SocketDocsData | null) => {
    activeGatewayIdx: number;
    setActiveGatewayIdx: import("react").Dispatch<import("react").SetStateAction<number>>;
    activeEventIdx: number;
    setActiveEventIdx: import("react").Dispatch<import("react").SetStateAction<number>>;
    searchQuery: string;
    setSearchQuery: import("react").Dispatch<import("react").SetStateAction<string>>;
    isPaused: boolean;
    setIsPaused: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    theme: "dark" | "light";
    toggleTheme: () => void;
    exportContract: () => void;
    activeGateway: import("../types").SocketDocsGateway;
    activeEvent: import("../types").SocketDocsEvent;
    filteredGateways: import("../types").SocketDocsGateway[];
};
