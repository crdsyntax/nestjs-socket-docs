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

interface SocketDocsWindow extends Window {
  SOCKET_DOCS_CONFIG?: {
    api?: Partial<ApiConfig>;
    socket?: Partial<SocketConfig>;
  };
}

const App = () => {
  const isStandalone = React.useMemo(() => {
    return !window.location.pathname.includes('socket-docs');
  }, []);

  const [apiConfig, setApiConfig] = React.useState<ApiConfig>(() => {
    const external = (window as unknown as SocketDocsWindow).SOCKET_DOCS_CONFIG?.api || {};
    const saved = localStorage.getItem(STORAGE_KEYS.API);
    const parsedSaved = saved ? JSON.parse(saved) : {};
    
    const config: ApiConfig = {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json",
      ...external,
    };

    if (parsedSaved.baseUrl) {
      config.baseUrl = parsedSaved.baseUrl;
    }
    
    if (parsedSaved.jsonPath && !external.jsonPath) {
      config.jsonPath = parsedSaved.jsonPath;
    }
    
    return config;
  });
  
  const [socketConfig, setSocketConfig] = React.useState<SocketConfig>(() => {
    const external = (window as unknown as SocketDocsWindow).SOCKET_DOCS_CONFIG?.socket;
    const saved = localStorage.getItem(STORAGE_KEYS.SOCKET);
    const parsedSaved = saved ? JSON.parse(saved) : null;

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
      },
      eventRetries: {
        attempts: 0,
        delay: 1000,
      }
    };

    if (external) {
      return { ...defaultConfig, ...parsedSaved, ...external };
    }
    
    if (parsedSaved) return parsedSaved;
    
    return defaultConfig;
  });

  const [showSettings, setShowSettings] = React.useState(false);

  const schemaConfig = React.useMemo(() => {
    if (isStandalone) {
      return {
        ...apiConfig,
        baseUrl: window.location.origin, 
      };
    }
    return apiConfig;
  }, [apiConfig, isStandalone]);

  const { data, payloads, setPayloads, expanded, toggleExpand, loading, error } = useSocketDocs(schemaConfig);

  React.useEffect(() => {
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

  const { connected, logs, connect, disconnect, emitEvent, clearLogs } = useSocketClient(socketClientOptions);
  
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

  React.useEffect(() => {
    if (activeGateway) {
      const baseUrl = apiConfig.baseUrl.replace(/\/$/, "");
      const ns = socketConfig.namespace === "/" 
        ? activeGateway.namespace 
        : socketConfig.namespace;
      const fullUrl = `${baseUrl}${normalizedNs(ns)}`;

      if (socketConfig.autoConnect) {
        const timeout = setTimeout(() => {
          connect(activeGateway.name, fullUrl, activeGateway.path);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [
    activeGateway?.name, 
    socketConfig.autoConnect, 
    socketConfig.namespace,
    socketConfig.auth.token,
    apiConfig.baseUrl, 
    connect
  ]);

  const handleSaveSettings = (newApi: ApiConfig, newSocket: SocketConfig) => {
    localStorage.setItem(STORAGE_KEYS.API, JSON.stringify(newApi));
    localStorage.setItem(STORAGE_KEYS.SOCKET, JSON.stringify(newSocket));
    setApiConfig(newApi);
    setSocketConfig(newSocket);
    setShowSettings(false);
    window.location.reload();
  };

  const handleConnectToggle = () => {
    if (!activeGateway) return;
    
    const baseUrl = apiConfig.baseUrl.replace(/\/$/, "");
    const ns = socketConfig.namespace === "/" 
      ? activeGateway.namespace 
      : socketConfig.namespace;
    const fullUrl = `${baseUrl}${normalizedNs(ns)}`;

    if (connected[activeGateway.name]) {
      disconnect(activeGateway.name, ns);
    } else {
      connect(activeGateway.name, fullUrl, activeGateway.path);
    }
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
    <div className={`flex min-h-screen font-sans text-text-primary ${theme === 'dark' ? 'bg-bg-primary' : 'bg-white text-gray-900'}`}>
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

      <main className="flex flex-1 flex-col bg-bg-secondary">
        <MainHeader
          connected={activeGateway ? !!connected[activeGateway.name] : false}
          gatewayPath={activeGateway ? `${apiConfig.baseUrl.replace(/https?:\/\//, '')}${activeGateway.path}` : "ws://localhost:3000"}
          namespace={socketConfig.namespace === "/" && activeGateway ? activeGateway.namespace : socketConfig.namespace}
          namespaces={availableNamespaces}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenSettings={() => setShowSettings(true)}
          onNamespaceChange={(ns) => setSocketConfig(prev => ({ ...prev, namespace: ns }))}
          onConnect={handleConnectToggle}
        />

        <div className="flex flex-1 p-4 md:p-6 gap-6 flex-col lg:flex-row">
          {activeGateway && activeEvent ? (
            <>
              {/* Left Column: Event Details and Execution */}
              <div className="flex flex-[1.5] flex-col min-w-0 gap-6">
                <div className="flex-shrink-0">
                  <EventDetails
                    gatewayName={activeGateway.name}
                    eventName={activeEvent.event}
                    summary={activeEvent.summary ?? ""}
                    description={activeEvent.description ?? ""}
                    auth={activeEvent.auth}
                  />
                </div>

                <div className="flex-shrink-0">
                  <ParametersPanel
                    schema={activeEvent.payloadSchema}
                    responseSchema={activeEvent.responseSchema}
                  />
                </div>

                <div className="flex-shrink-0">
                  <RequestBodyPanel
                    payload={payloads[eventKey] ?? "{}"}
                    schema={activeEvent.payloadSchema}
                    responseSchema={activeEvent.responseSchema}
                    emits={activeEvent.emits}
                    onChange={(val) => setPayloads({ ...payloads, [eventKey]: val })}
                    onSend={() => emitEvent(activeGateway.name, activeEvent.event, payloads[eventKey] ?? "{}")}
                  />
                </div>
              </div>

              {/* Right Column: Real-time Logs */}
              <div className="flex flex-1 flex-col border-t lg:border-t-0 lg:border-l border-border-subtle pt-6 lg:pt-0 lg:pl-6">
                <RealtimePanel
                  connected={!!connected[activeGateway.name]}
                  logs={logs}
                  onClear={clearLogs}
                  isPaused={isPaused}
                  onTogglePause={() => setIsPaused(!isPaused)}
                />
              </div>
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-text-secondary italic">
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
