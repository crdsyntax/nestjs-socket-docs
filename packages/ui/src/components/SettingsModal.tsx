import React from "react";
import { discoverLocalServers, DiscoveredServer } from "../services/discovery.service";

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
  const [isDiscovering, setIsDiscovering] = React.useState(false);
  const [discoveredServers, setDiscoveredServers] = React.useState<DiscoveredServer[]>([]);
  const [discoveryError, setDiscoveryError] = React.useState<string | null>(null);
  const [hasDiscovered, setHasDiscovered] = React.useState(false);
  const [authRequiredWarning, setAuthRequiredWarning] = React.useState(false);

  React.useEffect(() => {
    if (show) {
      setTempApiConfig(initialApiConfig);
      setTempSocketConfig(initialSocketConfig);
      setTestResult(null);
      setShowResultModal(false);
      setDiscoveryError(null);
      setAuthRequiredWarning(false);
      // keep previous discoveredServers for convenience, but reset hasDiscovered if needed
    }
  }, [show, initialApiConfig, initialSocketConfig]);

  // Proactively detect if the target gateway requires auth but no token is provided.
  React.useEffect(() => {
    if (!show) return;
    const baseUrl = (tempApiConfig.baseUrl || window.location.origin).replace(/\/$/, "");
    const jsonPath = tempApiConfig.jsonPath.startsWith("/") ? tempApiConfig.jsonPath : `/${tempApiConfig.jsonPath}`;
    const ns = tempSocketConfig.namespace === "/" ? (activeGatewayNamespace ?? "/") : tempSocketConfig.namespace;
    const targetNs = normalizedNs(ns);
    const hasAuth = !!(tempSocketConfig.auth.token || tempSocketConfig.auth.userId);
    if (!baseUrl || hasAuth) {
      setAuthRequiredWarning(false);
      return;
    }
    let cancelled = false;
    fetch(`${baseUrl}${jsonPath}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((schema) => {
        if (cancelled || !schema) return;
        const gateway = (schema?.gateways || []).find(
          (g: any) => normalizedNs(g.namespace || "/") === targetNs
        );
        const requiresAuth = (gateway?.events || []).some(
          (e: any) => e.auth && e.auth !== "NONE"
        );
        setAuthRequiredWarning(requiresAuth && !hasAuth);
      })
      .catch(() => {
        /* ignore - the test itself will report errors */
      });
    return () => {
      cancelled = true;
    };
  }, [show, tempApiConfig.baseUrl, tempApiConfig.jsonPath, tempSocketConfig.namespace, tempSocketConfig.auth.token, tempSocketConfig.auth.userId, activeGatewayNamespace]);

  const handleDiscover = async () => {
    setIsDiscovering(true);
    setDiscoveryError(null);
    try {
      const res = await discoverLocalServers();
      setDiscoveredServers(res.servers);
      setHasDiscovered(true);
      if (res.servers.length === 0) {
        setDiscoveryError('No se encontraron servidores locales con /socket-docs/json. Verifica que tu app NestJS esté corriendo con SocketDocsModule.setup().');
      }
    } catch (e) {
      setDiscoveryError(e instanceof Error ? e.message : 'Error desconocido al escanear');
      setHasDiscovered(true);
    } finally {
      setIsDiscovering(false);
    }
  };

  const applyDiscovered = (srv: DiscoveredServer) => {
    setTempApiConfig(prev => ({
      ...prev,
      baseUrl: srv.baseUrl,
      // En modo standalone el jsonPath está bloqueado, pero si el servidor descubierto usa el mismo path lo respetamos.
      // Si no es standalone, adoptamos el jsonPath detectado.
      jsonPath: isStandalone ? prev.jsonPath : srv.jsonPath,
    }));
  };

  const normalizedNs = (ns: string) => ns.startsWith("/") ? ns : `/${ns}`;

  const testConnection = async () => {
    setIsTesting(true);
    setTestResult(null);

    // Ensure baseUrl is not empty - fallback to current origin
    const baseUrl = (tempApiConfig.baseUrl || window.location.origin).replace(/\/$/, "");
    const jsonPath = tempApiConfig.jsonPath.startsWith("/") ? tempApiConfig.jsonPath : `/${tempApiConfig.jsonPath}`;
    
    try {
      // 1. Test API (Fetch Docs)
      const response = await fetch(`${baseUrl}${jsonPath}`);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Respuesta no es JSON. Content-Type: ${contentType}`);
      }
      const schemaData = await response.json();

      // 2. Test Socket
      const { io } = await import("socket.io-client");
      const ns = tempSocketConfig.namespace === "/" ? (activeGatewayNamespace ?? "/") : tempSocketConfig.namespace;
      const targetNs = normalizedNs(ns);

      // Detect if the target gateway requires auth but no token is provided
      const gateway = (schemaData?.gateways || []).find(
        (g: any) => normalizedNs(g.namespace || "/") === targetNs
      );
      const requiresAuth = (gateway?.events || []).some(
        (e: any) => e.auth && e.auth !== "NONE"
      );
      const hasAuth = !!(tempSocketConfig.auth.token || tempSocketConfig.auth.userId);

      await new Promise<void>((resolve) => {
        const socket = io(`${baseUrl}${targetNs}`, {
          path: tempSocketConfig.path,
          transports: tempSocketConfig.transports,
          auth: tempSocketConfig.auth,
          timeout: 5000,
          forceNew: true,
          reconnection: false,
        });

        let settled = false;

        const cleanup = () => {
          socket.off("connect");
          socket.off("connect_error");
          socket.off("disconnect");
          socket.disconnect();
        };

        const fail = (message: string, extra?: any) => {
          if (settled) return;
          settled = true;
          setTestResult({
            success: false,
            message,
            data: { schema: schemaData, ...extra },
          });
          setIsTesting(false);
          setShowResultModal(true);
          cleanup();
          resolve();
        };

        const succeed = (socketId?: string) => {
          if (settled) return;
          settled = true;
          setTestResult({
            success: true,
            message: "¡Conexión exitosa!",
            data: { schema: schemaData, socketId },
          });
          setIsTesting(false);
          setShowResultModal(true);
          cleanup();
          resolve();
        };

        // Pre-warning: schema requires auth but none provided
        if (requiresAuth && !hasAuth) {
          // We still run the test, but the failure below will be more explicit
          console.warn("[SocketDocs] Gateway requires auth but no token provided");
        }

        socket.on("connect", () => {
          // Do NOT declare success immediately: the server may reject auth
          // right after the transport handshake (e.g. 400 + disconnect).
          // Give it a short grace period to surface a server-side rejection.
          setTimeout(() => {
            if (socket.connected) {
              succeed(socket.id);
            }
            // If the server already disconnected us, the "disconnect" handler fired first.
          }, 600);
        });

        socket.on("connect_error", (err: any) => {
          const reason =
            err?.message ||
            err?.description ||
            (typeof err === "string" ? err : "Error de conexión");
          const serverMsg = err?.data?.message || err?.data || reason;
          if (requiresAuth && !hasAuth) {
            fail(`Autenticación requerida: falta el token. El servidor respondió: "${serverMsg}"`, {
              authRequired: true,
            });
          } else {
            fail(`Error Socket: ${reason}`, { serverError: err?.data });
          }
        });

        socket.on("disconnect", (reason: string) => {
          if (settled) return; // our own cleanup
          // "io server disconnect" / "transport close" / "parse error" => server rejected us
          if (reason === "io server disconnect" || reason === "transport close" || reason === "parse error") {
            if (requiresAuth && !hasAuth) {
              fail("Autenticación fallida: el servidor rechazó la conexión (token faltante o inválido).", {
                authRequired: true,
              });
            } else {
              fail(`El servidor rechazó la conexión: ${reason}. Verifica auth / path / namespace.`);
            }
          }
          // "io client disconnect" is from our own cleanup -> ignore
        });

        // Hard safety timeout
        setTimeout(() => {
          if (!settled) {
            if (requiresAuth && !hasAuth) {
              fail("Tiempo de espera agotado. El gateway requiere autenticación; verifica el token.");
            } else {
              fail("Tiempo de espera agotado. El servidor no confirmó la conexión.");
            }
          }
        }, 6000);
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
                    className={`w-full rounded border p-2 text-sm outline-none transition-colors ${
                      !tempApiConfig.baseUrl 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-border-subtle focus:border-brand-emerald'
                    } ${theme === 'dark' ? 'bg-bg-secondary' : 'bg-gray-100'}`}
                    placeholder="http://localhost:3000"
                  />
                  {!tempApiConfig.baseUrl && (
                    <p className="mt-1 text-[10px] text-red-500">La Base URL es requerida</p>
                  )}
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

                {/* Local discovery */}
                <div className={`rounded border p-3 ${theme === 'dark' ? 'bg-bg-secondary/50 border-border-subtle' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-text-primary">Servidores locales</p>
                      <p className="text-[11px] text-text-muted">Detecta apps NestJS con SocketDocs en tu máquina</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleDiscover}
                      disabled={isDiscovering}
                      className={`shrink-0 rounded px-3 py-1.5 text-xs font-bold transition-all ${isDiscovering ? 'bg-bg-secondary text-text-muted cursor-wait' : 'bg-brand-emerald text-bg-primary hover:bg-brand-emerald-light'}`}
                    >
                      {isDiscovering ? 'Escaneando…' : 'Detectar'}
                    </button>
                  </div>

                  {isDiscovering && (
                    <p className="mt-2 text-[11px] text-text-muted animate-pulse">Escaneando puertos locales (3000, 4000, 5000, 8080, …)</p>
                  )}

                  {!isDiscovering && hasDiscovered && discoveredServers.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="text-[11px] font-medium text-brand-emerald">{discoveredServers.length} servidor{discoveredServers.length !== 1 ? 'es' : ''} encontrado{discoveredServers.length !== 1 ? 's' : ''}:</p>
                      {discoveredServers.map(srv => {
                        const isSelected = tempApiConfig.baseUrl === srv.baseUrl && tempApiConfig.jsonPath === srv.jsonPath;
                        return (
                          <button
                            key={`${srv.baseUrl}${srv.jsonPath}`}
                            type="button"
                            onClick={() => applyDiscovered(srv)}
                            className={`flex w-full items-center justify-between rounded border px-3 py-2 text-left transition-colors ${isSelected ? 'border-brand-emerald bg-brand-emerald/10' : 'border-border-subtle hover:border-brand-emerald/50 hover:bg-bg-secondary'}`}
                          >
                            <div className="min-w-0">
                              <p className="truncate text-xs font-semibold text-text-primary">{srv.baseUrl}<span className="font-normal text-text-muted">{srv.jsonPath}</span></p>
                              <p className="text-[11px] text-text-muted">{srv.gateways} gateway{srv.gateways !== 1 ? 's' : ''} · {srv.latencyMs}ms · :{srv.port}</p>
                            </div>
                            <span className={`ml-2 shrink-0 rounded px-2 py-0.5 text-[10px] font-bold ${isSelected ? 'bg-brand-emerald text-bg-primary' : 'bg-bg-surface border border-border-subtle text-text-muted'}`}>
                              {isSelected ? 'Seleccionado' : 'Usar'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {!isDiscovering && hasDiscovered && discoveredServers.length === 0 && discoveryError && (
                    <p className="mt-2 rounded bg-red-500/10 px-2 py-1.5 text-[11px] text-red-500 border border-red-500/20">{discoveryError}</p>
                  )}

                  {!hasDiscovered && !isDiscovering && (
                    <p className="mt-2 text-[11px] text-text-muted">Haz clic en Detectar para escanear puertos locales y autocompletar la Base URL.</p>
                  )}
                </div>

              <section>
                <h3 className="mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider">Autenticación</h3>
                {authRequiredWarning && (
                  <div className="mb-3 rounded border border-red-500/30 bg-red-500/10 px-3 py-2 text-[11px] text-red-500">
                    ⚠️ Este gateway requiere autenticación. Completa el Token (o User ID) o la conexión será rechazada con 400.
                  </div>
                )}
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
              onClick={() => {
                // Ensure baseUrl is not empty before saving
                const configToSave = {
                  ...tempApiConfig,
                  baseUrl: tempApiConfig.baseUrl || window.location.origin,
                };
                onSave(configToSave, tempSocketConfig);
              }}
              disabled={!tempApiConfig.baseUrl && !tempApiConfig.jsonPath}
              className={`rounded px-6 py-2 text-sm font-bold shadow-lg transition-all active:scale-95 ${
                !tempApiConfig.baseUrl && !tempApiConfig.jsonPath
                  ? 'bg-gray-500 text-gray-300 cursor-not-allowed shadow-none'
                  : 'bg-brand-emerald text-bg-primary hover:bg-brand-emerald-light shadow-brand-emerald/20'
              }`}
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
