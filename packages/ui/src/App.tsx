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
    const configWindow = (window as unknown as SocketDocsWindow).SOCKET_DOCS_CONFIG || {};
    return !!configWindow.api?.jsonPath || !window.location.pathname.includes('socket-docs');
  }, []);

  const [apiConfig, setApiConfig] = React.useState<ApiConfig>(() => {
    const configWindow = (window as unknown as SocketDocsWindow).SOCKET_DOCS_CONFIG || {};
    const external = configWindow.api || {};
    const saved = localStorage.getItem(STORAGE_KEYS.API);
    const parsedSaved = saved ? JSON.parse(saved) : {};
    
    // 1. Defaults
    const config: ApiConfig = {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json",
    };

    // 2. Apply external (server injected)
    if (external.baseUrl) config.baseUrl = external.baseUrl;
    if (external.jsonPath) config.jsonPath = external.jsonPath;

    // 3. Apply saved (user preference)
    if (parsedSaved.baseUrl) config.baseUrl = parsedSaved.baseUrl;
    
    // In standalone mode, we strictly respect the server's jsonPath 
    // unless the user is pointing to a different baseUrl
    const isSameHost = parsedSaved.baseUrl ? parsedSaved.baseUrl.includes(window.location.host) : true;
    
    if (parsedSaved.jsonPath && (!isStandalone || !isSameHost)) {
      config.jsonPath = parsedSaved.jsonPath;
    }

    return config;
  });

  const [socketConfig, setSocketConfig] = React.useState<SocketConfig>(() => {
    const configWindow = (window as unknown as SocketDocsWindow).SOCKET_DOCS_CONFIG || {};
    const external = configWindow.socket;
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

    const config = { ...defaultConfig };

    // Apply external
    if (external) {
      Object.assign(config, external);
    }

    // Apply saved
    if (parsedSaved) {
      Object.assign(config, parsedSaved);
    }
    
    return config;
  });

  const [showSettings, setShowSettings] = React.useState(false);

  const schemaConfig = React.useMemo(() => {
    return apiConfig;
  }, [apiConfig]);

  const { data, payloads, setPayloads, expanded, toggleExpand, loading, error } = useSocketDocs(schemaConfig);

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
    const nsSet = new Set<string>(["/"]);
    data.gateways.forEach(g => nsSet.add(g.namespace));
    return Array.from(nsSet);
  }, [data]);

  const availablePaths = React.useMemo(() => {
    if (!data) return ["/socket.io"];
    const pathSet = new Set<string>(["/socket.io"]);
    data.gateways.forEach(g => pathSet.add(g.path));
    return Array.from(pathSet);
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
      const path = socketConfig.path === "/socket.io"
        ? activeGateway.path
        : socketConfig.path;
      const fullUrl = `${baseUrl}${normalizedNs(ns)}`;

      if (socketConfig.autoConnect) {
        const timeout = setTimeout(() => {
          connect(activeGateway.name, fullUrl, path);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [
    activeGateway?.name, 
    socketConfig.autoConnect, 
    socketConfig.namespace,
    socketConfig.path,
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

  const handleClearSettings = () => {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
    localStorage.removeItem("socket_docs_payloads");
    localStorage.removeItem("socket_docs_theme");
    localStorage.removeItem("socket_docs_gateway_idx");
    localStorage.removeItem("socket_docs_event_idx");
    localStorage.removeItem("socket_docs_search");
    window.location.reload();
  };

  const handleConnectToggle = () => {
    if (!activeGateway) return;
    
    const baseUrl = apiConfig.baseUrl.replace(/\/$/, "");
    const ns = socketConfig.namespace === "/" 
      ? activeGateway.namespace 
      : socketConfig.namespace;
    const path = socketConfig.path === "/socket.io"
      ? activeGateway.path
      : socketConfig.path;
    const fullUrl = `${baseUrl}${normalizedNs(ns)}`;

    if (connected[activeGateway.name]) {
      disconnect(activeGateway.name, ns);
    } else {
      connect(activeGateway.name, fullUrl, path);
    }
  };

  const normalizedNs = (ns: string) => ns.startsWith("/") ? ns : `/${ns}`;

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    const failedUrl = (error as any).config?.url || apiConfig.jsonPath;
    return (
      <div className={`flex h-screen flex-col items-center justify-center gap-4 ${theme === 'dark' ? 'bg-bg-primary text-text-primary' : 'bg-white text-gray-900'}`}>
        <h1 className="text-2xl font-bold text-red-500">Error loading Socket Docs</h1>
        <p className="text-text-muted">{error.message}</p>
        <p className="text-xs text-text-muted opacity-50">URL: {failedUrl}</p>
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
          onClear={handleClearSettings}
          initialApiConfig={apiConfig}
          initialSocketConfig={socketConfig}
          isStandalone={isStandalone}
          theme={theme}
          activeGatewayNamespace={activeGateway?.namespace}
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
          namespace={socketConfig.namespace !== "/" ? socketConfig.namespace : (activeGateway?.namespace || "/")}
          namespaces={availableNamespaces}
          path={socketConfig.path !== "/socket.io" ? socketConfig.path : (activeGateway?.path || "/socket.io")}
          paths={availablePaths}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenSettings={() => setShowSettings(true)}
          onNamespaceChange={(ns) => setSocketConfig(prev => ({ ...prev, namespace: ns }))}
          onPathChange={(p) => setSocketConfig(prev => ({ ...prev, path: p }))}
          onConnect={handleConnectToggle}
        />

        <div className="flex flex-1 p-4 md:p-6 gap-6 flex-col lg:flex-row overflow-hidden">
          {activeGateway && activeEvent ? (
            <>
              {/* Left Column: Event Details and Execution */}
              <div className="flex flex-[1.5] flex-col min-w-0 gap-6 overflow-y-auto pr-2">
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
              <div className="flex flex-1 flex-col border-t lg:border-t-0 lg:border-l border-border-subtle pt-6 lg:pt-0 lg:pl-6 overflow-hidden">
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
            <div className="flex h-full w-full flex-col items-center justify-center text-center p-12">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-emerald/10 text-brand-emerald shadow-xl shadow-brand-emerald/5">
                 <span className="text-4xl font-bold">■</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-text-primary">Bienvenido a Socket Docs</h2>
              <p className="max-w-md text-text-secondary">
                Selecciona un Gateway y un evento de la barra lateral para comenzar a interactuar con tu servidor WebSocket en tiempo real.
              </p>
              {data && (
                <div className="mt-8 flex gap-4">
                  <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase text-text-muted">Gateways</span>
                      <span className="text-xl font-bold">{data.gateways.length}</span>
                  </div>
                  <div className="h-10 w-px bg-border-subtle mx-4" />
                  <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase text-text-muted">Total Eventos</span>
                      <span className="text-xl font-bold">
                        {data.gateways.reduce((acc, g) => acc + g.events.length, 0)}
                      </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <SettingsModal
          show={showSettings}
          onClose={() => setShowSettings(false)}
          onSave={handleSaveSettings}
          onClear={handleClearSettings}
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
