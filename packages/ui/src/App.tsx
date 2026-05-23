import React from "react";
import LoadingScreen from "./components/LoadingScreen";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/MainHeader";
import EventDetails from "./components/EventDetails";
import ParametersPanel from "./components/ParametersPanel";
import RequestBodyPanel from "./components/RequestBodyPanel";
import RealtimePanel from "./components/RealtimePanel";
import useSocketClient from "./hooks/useSocketClient";
import useSocketDocs from "./hooks/useSocketDocs";
import { useAppLogic } from "./hooks/useAppLogic";

const App = () => {
  const { data, payloads, setPayloads } = useSocketDocs();
  const { connected, logs, connect, emitEvent, clearLogs } = useSocketClient();
  
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
      />

      <main className="flex flex-1 flex-col overflow-y-auto bg-bg-secondary">
        <MainHeader
          connected={!!connected[activeGateway?.name]}
          gatewayPath={activeGateway?.path ?? "ws://localhost:3000"}
          namespace={activeGateway?.namespace ?? "/"}
          theme={theme}
          onToggleTheme={toggleTheme}
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
                onConnect={() => connect(activeGateway.name, activeGateway.namespace, activeGateway.path)}
              />

              <RequestBodyPanel
                payload={payloads[eventKey] ?? "{}"}
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
      </main>
    </div>
  );
};

export default App;
