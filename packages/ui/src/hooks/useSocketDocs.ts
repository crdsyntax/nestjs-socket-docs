import { useEffect, useState } from "react";
import {
  ExpandedState,
  PayloadMap,
  SocketDocsData,
} from "../types";

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

const useSocketDocs = () => {
  const [data, setData] = useState<SocketDocsData | null>(null);
  const [payloads, setPayloads] = useState<PayloadMap>({});
  const [expanded, setExpanded] = useState<ExpandedState>({});

  useEffect(() => {
    fetch("/socket-docs/json")
      .then((res) => res.json() as Promise<SocketDocsData>)
      .then((result) => {
        setData(result);
        setPayloads(buildInitialPayloads(result));
      })
      .catch(console.error);
  }, []);

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return {
    data,
    payloads,
    expanded,
    setPayloads,
    toggleExpand,
  };
};

export default useSocketDocs;
