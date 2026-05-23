import { useState, useMemo } from "react";
import { SocketDocsData } from "../types";

export const useAppLogic = (data: SocketDocsData | null) => {
  const [activeGatewayIdx, setActiveGatewayIdx] = useState(0);
  const [activeEventIdx, setActiveEventIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const filteredGateways = useMemo(() => {
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
    // In a real app, this would update a class on body or a context
  };

  const exportContract = () => {
    if (!data) return;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "socket-docs-contract.json";
    a.click();
  };

  return {
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
