import { ExpandedState, PayloadMap, SocketDocsData } from "../types";
import { ApiConfig } from "../services/api.service";
export interface UseSocketDocsOptions extends ApiConfig {
}
declare const useSocketDocs: (options?: UseSocketDocsOptions) => {
    data: SocketDocsData | null;
    payloads: PayloadMap;
    expanded: ExpandedState;
    loading: boolean;
    error: Error | null;
    setPayloads: import("react").Dispatch<import("react").SetStateAction<PayloadMap>>;
    toggleExpand: (key: string) => void;
};
export default useSocketDocs;
