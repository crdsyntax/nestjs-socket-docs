import React from "react";

export interface ApiConfig {
  baseUrl: string;
  jsonPath: string;
}

export interface SocketConfig {
  namespace: string;
  path: string;
  transports: ("polling" | "websocket")[];
  reconnection: boolean;
  reconnectionAttempts: number;
  reconnectionDelay: number;
  reconnectionDelayMax: number;
  timeout: number;
  autoConnect: boolean;
  randomizationFactor: number;
  auth: {
    token: string;
    userId: string;
  };
  eventRetries?: {
    attempts: number;
    delay: number;
  };
}

interface SettingsModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (api: ApiConfig, socket: SocketConfig) => void;
  onClear: () => void;
  initialApiConfig: ApiConfig;
  initialSocketConfig: SocketConfig;
  isStandalone: boolean;
  theme: "dark" | "light";
  activeGatewayNamespace?: string;
}

const SettingsModal = ({
  show,
  onClose,
  onSave,
  onClear,
  initialApiConfig,
  initialSocketConfig,
  isStandalone,
  theme,
  activeGatewayNamespace
}: SettingsModalProps) => {
  const [tempApiConfig, setTempApiConfig] = React.useState(initialApiConfig);
  const [tempSocketConfig, setTempSocketConfig] = React.useState(initialSocketConfig);
  const [isTesting, setIsTesting] = React.useState(false);
  const [testResult, setTestResult] = React.useState<{ success: boolean; message: string; data?: any } | null>(null);
  const [showResultModal, setShowResultModal] = React.useState(false);

  React.useEffect(() => {
    if (show) {
      setTempApiConfig(initialApiConfig);
      setTempSocketConfig(initialSocketConfig);
      setTestResult(null);
      setShowResultModal(false);
    }
  }, [show, initialApiConfig, initialSocketConfig]);

  const normalizedNs = (ns: string) => ns.startsWith("/") ? ns : `/${ns}`;

  const testConnection = async () => {
    setIsTesting(true);
    setTestResult(null);

    const baseUrl = tempApiConfig.baseUrl.replace(/\/$/, "");
    const jsonPath = tempApiConfig.jsonPath.startsWith("/") ? tempApiConfig.jsonPath : `/${tempApiConfig.jsonPath}`;
    
    try {
      // 1. Test API (Fetch Docs)
      const response = await fetch(`${baseUrl}${jsonPath}`);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const schemaData = await response.json();

      // 2. Test Socket
      const { io } = await import("socket.io-client");
      const ns = tempSocketConfig.namespace === "/" ? (activeGatewayNamespace ?? "/") : tempSocketConfig.namespace;
      const socket = io(`${baseUrl}${normalizedNs(ns)}`, {
        path: tempSocketConfig.path,
        transports: tempSocketConfig.transports,
        auth: tempSocketConfig.auth,
        timeout: 5000,
        forceNew: true,
        reconnection: false,
      });

      const cleanup = () => {
        socket.off("connect");
        socket.off("connect_error");
        socket.disconnect();
      };

      socket.on("connect", () => {
        setTestResult({ 
          success: true, 
          message: "¡Conexión exitosa!",
          data: { schema: schemaData, socketId: socket.id }
        });
        setIsTesting(false);
        setShowResultModal(true);
        cleanup();
      });

      socket.on("connect_error", (err) => {
        setTestResult({ 
          success: false, 
          message: `Error Socket: ${err.message}. Pero API OK.`,
          data: { schema: schemaData }
        });
        setIsTesting(false);
        setShowResultModal(true);
        cleanup();
      });

    } catch (err) {
      setTestResult({ success: false, message: `Error: ${err instanceof Error ? err.message : 'Error desconocido'}` });
      setIsTesting(false);
      setShowResultModal(true);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      {showResultModal && testResult && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/40">
           <div className={`w-full max-w-2xl rounded-lg p-6 shadow-2xl border border-border-subtle ${theme === 'dark' ? 'bg-bg-primary text-text-primary' : 'bg-white text-gray-900'}`}>
              <h3 className={`text-lg font-bold mb-4 ${testResult.success ? 'text-brand-emerald' : 'text-red-500'}`}>
                {testResult.success ? '✓ Conexión Verificada' : '✗ Fallo en la Conexión'}
              </h3>
              <div className="space-y-4">
                 <div className="rounded bg-bg-secondary p-3 text-sm border border-border-subtle">
                    <p className="font-semibold mb-1">Resultado:</p>
                    <p className="text-text-secondary">{testResult.message}</p>
                 </div>
                 {testResult.data?.schema && (
                    <div className="rounded bg-bg-secondary p-3 text-xs border border-border-subtle max-h-60 overflow-y-auto">
                       <p className="font-semibold mb-2 text-brand-emerald">Esquema detectado:</p>
                       <pre className="font-mono text-text-muted">
                          {JSON.stringify(testResult.data.schema, null, 2)}
                       </pre>
                    </div>
                 )}
              </div>
              <div className="mt-6 flex justify-end gap-3">
                 <button 
                   onClick={() => setShowResultModal(false)}
                   className="rounded bg-bg-secondary px-6 py-2 text-sm font-medium hover:bg-border-subtle transition-all"
                 >
                   Cerrar
                 </button>
                 {testResult.success && (
                   <button 
                     onClick={() => {
                       onSave(tempApiConfig, tempSocketConfig);
                       setShowResultModal(false);
                     }}
                     className="rounded bg-brand-emerald px-6 py-2 text-sm font-bold text-bg-primary hover:bg-brand-emerald-light transition-all"
                   >
                     Guardar y Aplicar
                   </button>
                 )}
              </div>
           </div>
        </div>
      )}
      <div className={`w-full max-w-4xl rounded-lg p-6 shadow-xl border border-border-subtle flex flex-col max-h-[90vh] ${theme === 'dark' ? 'bg-bg-primary text-text-primary' : 'bg-white text-gray-900'}`}>
        <h2 className="mb-4 text-xl font-bold">Configuración Completa</h2>
        
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold uppercase text-brand-emerald tracking-wider">Documentación API</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${isStandalone ? 'bg-orange-500/20 text-orange-500' : 'bg-brand-emerald/20 text-brand-emerald'}`}>
                  {isStandalone ? 'Modo Standalone' : 'Modo Integrado'}
                </span>
              </div>
              <div className="grid gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-text-muted">Base URL</label>
                  <input
                    type="text"
                    value={tempApiConfig.baseUrl}
                    onChange={(e) => setTempApiConfig({ ...tempApiConfig, baseUrl: e.target.value })}
                    className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    placeholder="http://localhost:3000"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-text-muted">
                    JSON Path {isStandalone && <span className="text-[10px] text-orange-500 font-normal">(Bloqueado en Standalone)</span>}
                  </label>
                  <input
                    type="text"
                    disabled={isStandalone}
                    value={tempApiConfig.jsonPath}
                    onChange={(e) => setTempApiConfig({ ...tempApiConfig, jsonPath: e.target.value })}
                    className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${isStandalone ? 'opacity-50 cursor-not-allowed bg-bg-secondary/50' : (theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100')}`}
                  />
                </div>
              </div>

              <section>
                <h3 className="mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider">Autenticación</h3>
                <div className="grid gap-3">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">JWT Token</label>
                    <textarea
                      value={tempSocketConfig.auth.token}
                      onChange={(e) => setTempSocketConfig({ 
                        ...tempSocketConfig, 
                        auth: { ...tempSocketConfig.auth, token: e.target.value } 
                      })}
                      className={`w-full h-24 rounded border border-border-subtle p-2 text-xs outline-none resize-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                      placeholder="Bearer eyJhbG..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">User ID</label>
                    <input
                      type="text"
                      value={tempSocketConfig.auth.userId}
                      onChange={(e) => setTempSocketConfig({ 
                        ...tempSocketConfig, 
                        auth: { ...tempSocketConfig.auth, userId: e.target.value } 
                      })}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider">Socket.IO Core</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <label className="mb-1 block text-xs font-medium text-text-muted">Namespace Override</label>
                    <input
                      type="text"
                      value={tempSocketConfig.namespace}
                      onChange={(e) => setTempSocketConfig({ ...tempSocketConfig, namespace: e.target.value })}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">Socket Path</label>
                    <input
                      type="text"
                      value={tempSocketConfig.path}
                      onChange={(e) => setTempSocketConfig({ ...tempSocketConfig, path: e.target.value })}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">Transporte</label>
                    <select
                      value={tempSocketConfig.transports.join(',')}
                      onChange={(e) => {
                        const val = e.target.value;
                        let transports: ("polling" | "websocket")[] = ["polling", "websocket"];
                        if (val === "websocket") transports = ["websocket"];
                        if (val === "polling") transports = ["polling"];
                        setTempSocketConfig({ ...tempSocketConfig, transports });
                      }}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    >
                      <option value="polling,websocket">Automático</option>
                      <option value="websocket">Websocket</option>
                      <option value="polling">Polling</option>
                    </select>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider">Reconexión y Tiempos</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="reconnection"
                      checked={tempSocketConfig.reconnection}
                      onChange={(e) => setTempSocketConfig({ ...tempSocketConfig, reconnection: e.target.checked })}
                      className="h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                    />
                    <label htmlFor="reconnection" className="text-xs font-medium text-text-muted">Habilitar Reconexión</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="autoConnect"
                      checked={tempSocketConfig.autoConnect}
                      onChange={(e) => setTempSocketConfig({ ...tempSocketConfig, autoConnect: e.target.checked })}
                      className="h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                    />
                    <label htmlFor="autoConnect" className="text-xs font-medium text-text-muted">Auto Conectar</label>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">Máx Intentos</label>
                    <input
                      type="number"
                      value={tempSocketConfig.reconnectionAttempts === Infinity ? 0 : tempSocketConfig.reconnectionAttempts}
                      onChange={(e) => setTempSocketConfig({ ...tempSocketConfig, reconnectionAttempts: e.target.value === "0" ? Infinity : parseInt(e.target.value) })}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                      placeholder="0 = Infinito"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">Timeout (ms)</label>
                    <input
                      type="number"
                      value={tempSocketConfig.timeout}
                      onChange={(e) => setTempSocketConfig({ ...tempSocketConfig, timeout: parseInt(e.target.value) })}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">Delay Inicial (ms)</label>
                    <input
                      type="number"
                      value={tempSocketConfig.reconnectionDelay}
                      onChange={(e) => setTempSocketConfig({ ...tempSocketConfig, reconnectionDelay: parseInt(e.target.value) })}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">Delay Máximo (ms)</label>
                    <input
                      type="number"
                      value={tempSocketConfig.reconnectionDelayMax}
                      onChange={(e) => setTempSocketConfig({ ...tempSocketConfig, reconnectionDelayMax: parseInt(e.target.value) })}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider">Reintentos de Eventos</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">Intentos</label>
                    <input
                      type="number"
                      value={tempSocketConfig.eventRetries?.attempts ?? 0}
                      onChange={(e) => setTempSocketConfig({ 
                        ...tempSocketConfig, 
                        eventRetries: { 
                          attempts: parseInt(e.target.value), 
                          delay: tempSocketConfig.eventRetries?.delay ?? 1000 
                        } 
                      })}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                      placeholder="0 = Sin reintentos"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-text-muted">Intervalo (ms)</label>
                    <input
                      type="number"
                      value={tempSocketConfig.eventRetries?.delay ?? 1000}
                      onChange={(e) => setTempSocketConfig({ 
                        ...tempSocketConfig, 
                        eventRetries: { 
                          attempts: tempSocketConfig.eventRetries?.attempts ?? 0, 
                          delay: parseInt(e.target.value) 
                        } 
                      })}
                      className={`w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-5">
          <div className="flex items-center gap-3">
            <button
              onClick={testConnection}
              disabled={isTesting}
              className={`rounded px-4 py-2 text-sm font-semibold transition-all ${
                isTesting 
                ? 'bg-bg-secondary text-text-muted cursor-not-allowed' 
                : 'bg-bg-surface border border-border-subtle text-text-primary hover:bg-border-subtle'
              }`}
            >
              {isTesting ? 'Probando...' : 'Probar Conexión'}
            </button>
            {testResult && (
              <span className={`text-xs font-medium ${testResult.success ? 'text-brand-emerald' : 'text-red-500'}`}>
                {testResult.message}
              </span>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                if (confirm("¿Estás seguro de que deseas limpiar todos los datos de conexión?")) {
                  onClear();
                }
              }}
              className="rounded border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-500/20 transition-all"
            >
              Limpiar Datos
            </button>
            <button
              onClick={onClose}
              className="rounded bg-bg-secondary px-6 py-2 text-sm font-medium text-text-primary hover:bg-border-subtle transition-all"
            >
              Cancelar
            </button>
            <button
              onClick={() => onSave(tempApiConfig, tempSocketConfig)}
              className="rounded bg-brand-emerald px-6 py-2 text-sm font-bold text-bg-primary hover:bg-brand-emerald-light shadow-lg shadow-brand-emerald/20 transition-all active:scale-95"
            >
              Guardar Configuración
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
