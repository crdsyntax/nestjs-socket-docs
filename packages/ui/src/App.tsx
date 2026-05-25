import React from "react";
import LoadingScreen from "./components/LoadingScreen";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/MainHeader";
import EventDetails from "./components/EventDetails";
import ParametersPanel from "./components/ParametersPanel";
import RequestBodyPanel from "./components/RequestBodyPanel";
import RealtimePanel from "./components/RealtimePanel";
import SettingsModal, { ApiConfig, SocketConfig } from "./components/SettingsModal";
import useSocketClient from "./hooks/useSocketClient";
import useSocketDocs from "./hooks/useSocketDocs";
import { useAppLogic } from "./hooks/useAppLogic";

const STORAGE_KEYS = {
  API: "socket_docs_api_config",
  SOCKET: "socket_docs_socket_config"
};

const App = () => {
  const isStandalone = React.useMemo(() => {
    return !window.location.pathname.includes('socket-docs');
  }, []);

  const [apiConfig, setApiConfig] = React.useState<ApiConfig>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.API);
    const external = (window as any).SOCKET_DOCS_CONFIG?.api;
    
    if (saved) return JSON.parse(saved);
    if (external) return { ...external };
    
    return {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json",
    };
  });
  
  const [socketConfig, setSocketConfig] = React.useState<SocketConfig>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SOCKET);
    const external = (window as any).SOCKET_DOCS_CONFIG?.socket;

    const defaultConfig: SocketConfig = {
      namespace: "/",
      path: "/socket.io",
      transports: ["polling", "websocket"] as ("polling" | "websocket")[],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
      autoConnect: true,
      randomizationFactor: 0.5,
      auth: {
        token: "",
        userId: "",
      }
    };

    if (saved) return JSON.parse(saved);
    if (external) return { ...defaultConfig, ...external };
    
    return defaultConfig;
  });

  const [showSettings, setShowSettings] = React.useState(false);

  const { data, payloads, setPayloads, expanded, toggleExpand, loading, error } = useSocketDocs(apiConfig);

  React.useEffect(() => {
    console.log("[SocketDocs] UI State:", { data, loading, error });
  }, [data, loading, error]);

  const socketClientOptions = React.useMemo(() => ({
    options: {
      path: socketConfig.path,
      transports: socketConfig.transports,
      reconnection: socketConfig.reconnection,
      reconnectionAttempts: socketConfig.reconnectionAttempts,
      reconnectionDelay: socketConfig.reconnectionDelay,
      reconnectionDelayMax: socketConfig.reconnectionDelayMax,
      timeout: socketConfig.timeout,
      autoConnect: socketConfig.autoConnect,
      randomizationFactor: socketConfig.randomizationFactor,
    },
    auth: socketConfig.auth,
  }), [socketConfig]);

  const { connected, logs, connect, emitEvent, clearLogs } = useSocketClient(socketClientOptions);
  
  const availableNamespaces = React.useMemo(() => {
    if (!data) return ["/"];
    const nsSet = new Set<string>();
    data.gateways.forEach(g => nsSet.add(g.namespace));
    return Array.from(nsSet);
  }, [data]);

  const {
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
  } = useAppLogic(data);

  // Auto-connect logic
  React.useEffect(() => {
    if (socketConfig.autoConnect && activeGateway && !connected[activeGateway.name]) {
      const baseUrl = apiConfig.baseUrl.replace(/\/$/, "");
      const ns = socketConfig.namespace === "/" 
        ? activeGateway.namespace 
        : socketConfig.namespace;
      
      const timeout = setTimeout(() => {
        connect(
          activeGateway.name, 
          `${baseUrl}${normalizedNs(ns)}`, 
          activeGateway.path
        );
      }, 500); // Small delay to avoid rapid connections when switching events
      
      return () => clearTimeout(timeout);
    }
  }, [activeGateway?.name, socketConfig.autoConnect, apiConfig.baseUrl, socketConfig.namespace, connect, connected]);

  const handleSaveSettings = (newApi: ApiConfig, newSocket: SocketConfig) => {
    localStorage.setItem(STORAGE_KEYS.API, JSON.stringify(newApi));
    localStorage.setItem(STORAGE_KEYS.SOCKET, JSON.stringify(newSocket));
    setApiConfig(newApi);
    setSocketConfig(newSocket);
    setShowSettings(false);
  };

  const normalizedNs = (ns: string) => ns.startsWith("/") ? ns : `/${ns}`;

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className={`flex h-screen flex-col items-center justify-center gap-4 ${theme === 'dark' ? 'bg-bg-primary text-text-primary' : 'bg-white text-gray-900'}`}>
        <h1 className="text-2xl font-bold text-red-500">Error loading Socket Docs</h1>
        <p className="text-text-muted">{error.message}</p>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowSettings(true)}
            className="px-6 py-2 bg-bg-surface border border-border-subtle rounded-md font-medium hover:bg-border-subtle transition-colors"
          >
            Configurar API
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-brand-emerald text-bg-primary rounded-md font-bold hover:bg-brand-emerald-light transition-colors"
          >
            Reintentar
          </button>
        </div>
        <SettingsModal
          show={showSettings}
          onClose={() => setShowSettings(false)}
          onSave={handleSaveSettings}
          initialApiConfig={apiConfig}
          initialSocketConfig={socketConfig}
          isStandalone={isStandalone}
          theme={theme}
        />
      </div>
    );
  }

  if (!data) {
    return <LoadingScreen />;
  }

  const eventKey = activeGateway && activeEvent ? `${activeGateway.name}-${activeEvent.event}` : "";
  return (
    <div className={`flex h-screen overflow-hidden font-sans text-text-primary ${theme === 'dark' ? 'bg-bg-primary' : 'bg-white text-gray-900'}`}>
      <Sidebar
        gateways={filteredGateways}
        activeGatewayIdx={activeGatewayIdx}
        activeEventIdx={activeEventIdx}
        onSelectGateway={setActiveGatewayIdx}
        onSelectEvent={setActiveEventIdx}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onExport={exportContract}
        expanded={expanded}
        onToggleExpand={toggleExpand}
      />

      <main className="flex flex-1 flex-col overflow-y-auto bg-bg-secondary">
        <MainHeader
          connected={activeGateway ? !!connected[activeGateway.name] : false}
          gatewayPath={activeGateway?.path ?? "ws://localhost:3000"}
          namespace={socketConfig.namespace === "/" && activeGateway ? activeGateway.namespace : socketConfig.namespace}
          namespaces={availableNamespaces}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenSettings={() => setShowSettings(true)}
          onNamespaceChange={(ns) => setSocketConfig(prev => ({ ...prev, namespace: ns }))}
        />

        <div className="mx-auto w-full max-w-[1200px] p-6">
          {activeGateway && activeEvent ? (
            <>
              <EventDetails
                gatewayName={activeGateway.name}
                eventName={activeEvent.event}
                summary={activeEvent.summary ?? ""}
                description={activeEvent.description ?? ""}
              />

              <ParametersPanel
                connected={!!connected[activeGateway.name]}
                schema={activeEvent.payloadSchema}
                onConnect={() => {
                  const baseUrl = apiConfig.baseUrl.replace(/\/$/, "");
                  const ns = socketConfig.namespace === "/" 
                    ? activeGateway.namespace 
                    : socketConfig.namespace;
                  
                  connect(
                    activeGateway.name, 
                    `${baseUrl}${normalizedNs(ns)}`, 
                    activeGateway.path
                  );
                }}
              />

              <RequestBodyPanel
                payload={payloads[eventKey] ?? "{}"}
                schema={activeEvent.payloadSchema}
                responseSchema={activeEvent.responseSchema}
                emits={activeEvent.emits}
                onChange={(val) => setPayloads({ ...payloads, [eventKey]: val })}
                onSend={() => emitEvent(activeGateway.name, activeEvent.event, payloads[eventKey] ?? "{}")}
              />

              <RealtimePanel
                connected={!!connected[activeGateway.name]}
                logs={logs}
                onClear={clearLogs}
                isPaused={isPaused}
                onTogglePause={() => setIsPaused(!isPaused)}
              />
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-text-secondary italic">
              Selecciona un evento para comenzar
            </div>
          )}
        </div>

        <SettingsModal
          show={showSettings}
          onClose={() => setShowSettings(false)}
          onSave={handleSaveSettings}
          initialApiConfig={apiConfig}
          initialSocketConfig={socketConfig}
          isStandalone={isStandalone}
          theme={theme}
          activeGatewayNamespace={activeGateway?.namespace}
        />
      </main>
    </div>
  );
};

export default App;
