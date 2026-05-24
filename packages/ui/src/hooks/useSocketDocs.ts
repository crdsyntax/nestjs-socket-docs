import { useEffect, useState, useMemo } from "react";
import {
  ExpandedState,
  PayloadMap,
  SocketDocsData,
} from "../types";
import { createApiService, ApiConfig } from "../services/api.service";

const STORAGE_KEY = "socket_docs_payloads";

const buildInitialPayloads = (data: SocketDocsData): PayloadMap => {
  const initialPayloads: PayloadMap = {};
  const savedPayloads = localStorage.getItem(STORAGE_KEY);
  const parsedSaved = savedPayloads ? JSON.parse(savedPayloads) : {};

  data.gateways.forEach((gateway) => {
    gateway.events.forEach((event) => {
      const key = `${gateway.name}-${event.event}`;
      initialPayloads[key] = parsedSaved[key] || JSON.stringify(
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

  useEffect(() => {
    if (Object.keys(payloads).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payloads));
    }
  }, [payloads]);

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
