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
}

interface SettingsModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (api: ApiConfig, socket: SocketConfig) => void;
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
  initialApiConfig,
  initialSocketConfig,
  isStandalone,
  theme,
  activeGatewayNamespace
}: SettingsModalProps) => {
  const [tempApiConfig, setTempApiConfig] = React.useState(initialApiConfig);
  const [tempSocketConfig, setTempSocketConfig] = React.useState(initialSocketConfig);
  const [isTesting, setIsTesting] = React.useState(false);
  const [testResult, setTestResult] = React.useState<{ success: boolean; message: string } | null>(null);

  React.useEffect(() => {
    if (show) {
      setTempApiConfig(initialApiConfig);
      setTempSocketConfig(initialSocketConfig);
      setTestResult(null);
    }
  }, [show, initialApiConfig, initialSocketConfig]);

  const normalizedNs = (ns: string) => ns.startsWith("/") ? ns : `/${ns}`;

  const testConnection = async () => {
    setIsTesting(true);
    setTestResult(null);

    const baseUrl = tempApiConfig.baseUrl.replace(/\/$/, "");
    const ns = tempSocketConfig.namespace === "/" ? (activeGatewayNamespace ?? "/") : tempSocketConfig.namespace;
    
    try {
      const { io } = await import("socket.io-client");
      const socket = io(`${baseUrl}${normalizedNs(ns)}`, {
        path: tempSocketConfig.path,
        transports: tempSocketConfig.transports,
        auth: tempSocketConfig.auth,
        timeout: 5000,
        forceNew: true,
        reconnection: false,
      });

      socket.on("connect", () => {
        setTestResult({ success: true, message: "¡Conexión exitosa!" });
        setIsTesting(false);
        socket.disconnect();
      });

      socket.on("connect_error", (err) => {
        setTestResult({ success: false, message: `Error: ${err.message}` });
        setIsTesting(false);
        socket.disconnect();
      });
    } catch (err) {
      setTestResult({ success: false, message: `Error: ${err instanceof Error ? err.message : 'Error desconocido'}` });
      setIsTesting(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
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
