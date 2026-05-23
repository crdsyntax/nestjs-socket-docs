import { useEffect, useState, useMemo } from "react";
import {
  ExpandedState,
  PayloadMap,
  SocketDocsData,
} from "../types";
import { createApiService, ApiConfig } from "../services/api.service";

const buildInitialPayloads = (data: SocketDocsData): PayloadMap => {
  const initialPayloads: PayloadMap = {};

  data.gateways.forEach((gateway) => {
    gateway.events.forEach((event) => {
      initialPayloads[`${gateway.name}-${event.event}`] = JSON.stringify(
        event.payloadSchema?.example ?? {},
        null,
        2,
      );
    });
  });

  return initialPayloads;
};

export interface UseSocketDocsOptions extends ApiConfig {}

const useSocketDocs = (options: UseSocketDocsOptions = {}) => {
  const [data, setData] = useState<SocketDocsData | null>(null);
  const [payloads, setPayloads] = useState<PayloadMap>({});
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const api = useMemo(() => createApiService(options), [options.baseUrl, options.jsonPath]);

  useEffect(() => {
    // If in standalone mode and baseUrl hasn't been configured (still points to UI origin),
    // we might want to skip or handle it gracefully. 
    // But for now, let it attempt and fail so the user sees the error modal and can configure it.
    
    setLoading(true);
    api.fetchDocs()
      .then((result) => {
        setData(result);
        setPayloads(buildInitialPayloads(result));
        setError(null);
      })
      .catch((err) => {
        console.error("Failed to fetch socket docs:", err);
        setError(err instanceof Error ? err : new Error("Unknown error"));
      })
      .finally(() => setLoading(false));
  }, [api]);

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return {
    data,
    payloads,
    expanded,
    loading,
    error,
    setPayloads,
    toggleExpand,
  };
};

export default useSocketDocs;
