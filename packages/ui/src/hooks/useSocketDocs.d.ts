/// <reference types="react" />
import { ExpandedState, PayloadMap, SocketDocsData } from "../types";
declare const useSocketDocs: () => {
    data: SocketDocsData | null;
    payloads: PayloadMap;
    expanded: ExpandedState;
    setPayloads: import("react").Dispatch<import("react").SetStateAction<PayloadMap>>;
    toggleExpand: (key: string) => void;
};
export default useSocketDocs;
