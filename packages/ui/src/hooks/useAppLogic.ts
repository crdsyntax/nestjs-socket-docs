import { useState, useMemo, useEffect } from "react";
import { SocketDocsData } from "../types";

const STORAGE_KEYS = {
  THEME: "socket_docs_theme",
  GATEWAY_IDX: "socket_docs_gateway_idx",
  EVENT_IDX: "socket_docs_event_idx",
  SEARCH: "socket_docs_search",
};

export const useAppLogic = (data: SocketDocsData | null) => {
  const [activeGatewayIdx, setActiveGatewayIdx] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GATEWAY_IDX);
    return saved ? parseInt(saved) : -1;
  });

  const [activeEventIdx, setActiveEventIdx] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.EVENT_IDX);
    return saved ? parseInt(saved) : -1;
  });

  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.SEARCH) || "";
  });

  const [isPaused, setIsPaused] = useState(false);
  
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem(STORAGE_KEYS.THEME) as "dark" | "light") || "dark";
  });

  // Persist changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GATEWAY_IDX, activeGatewayIdx.toString());
  }, [activeGatewayIdx]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EVENT_IDX, activeEventIdx.toString());
  }, [activeEventIdx]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SEARCH, searchQuery);
  }, [searchQuery]);

  const filteredGateways = useMemo(() => {
// ... (rest of filtering logic)
    if (!data) return [];
    if (!searchQuery) return data.gateways;

    return data.gateways.map(gateway => ({
      ...gateway,
      events: gateway.events.filter(event => 
        event.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gateway.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(gateway => gateway.events.length > 0);
  }, [data, searchQuery]);

  const activeGateway = filteredGateways[activeGatewayIdx];
  const activeEvent = activeGateway?.events?.[activeEventIdx];

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  const exportContract = () => {
    if (!data) return;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "socket-docs-contract.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return {
// ...
    activeGatewayIdx,
    setActiveGatewayIdx,
    activeEventIdx,
    setActiveEventIdx,
    searchQuery,
    setSearchQuery,
    isPaused,
    setIsPaused,
    theme,
    toggleTheme,
    exportContract,
    activeGateway,
    activeEvent,
    filteredGateways,
  };
};
