import React from "react";
import { Sun, Settings, Moon, Wifi, WifiOff } from "lucide-react";
import { translations } from "../locales/es";

interface MainHeaderProps {
  connected: boolean;
  gatewayPath: string;
  namespace: string;
  namespaces: string[];
  path: string;
  paths: string[];
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onOpenSettings?: () => void;
  onNamespaceChange: (ns: string) => void;
  onPathChange: (path: string) => void;
  onConnect: () => void;
}

const MainHeader = ({
  connected,
  gatewayPath,
  namespace,
  namespaces,
  path,
  paths,
  theme,
  onToggleTheme,
  onOpenSettings,
  onNamespaceChange,
  onPathChange,
  onConnect,
}: MainHeaderProps) => {
  return (
    <div className="flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6 bg-bg-primary">
      <div className="flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs mr-auto">
        <div className={`h-2 w-2 rounded-full ${connected ? "bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-red-500"}`} />
        <span className="font-medium">{connected ? translations.common.connected : translations.common.disconnected}</span>
        <span className="text-text-muted border-l border-border-subtle pl-2">{gatewayPath}</span>
      </div>

      <button
        onClick={onConnect}
        className={`flex items-center gap-2 rounded-md px-4 py-1.5 text-xs font-bold transition-all active:scale-95 ${
          connected 
            ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20" 
            : "bg-brand-emerald text-bg-primary hover:bg-brand-emerald-light shadow-lg shadow-brand-emerald/20"
        }`}
      >
        {connected ? <WifiOff size={14} /> : <Wifi size={14} />}
        {connected ? "Desconectar" : "Conectar"}
      </button>

      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold uppercase text-text-muted px-1">Namespace</span>
          <input 
            type="text"
            value={namespace}
            onChange={(e) => onNamespaceChange(e.target.value)}
            placeholder="/namespace"
            className="w-32 rounded-md border border-border-subtle bg-bg-surface px-3 py-1 text-xs text-text-primary outline-none focus:border-brand-emerald transition-colors"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-[9px] font-bold uppercase text-text-muted px-1">Path</span>
          <select 
            value={path}
            onChange={(e) => onPathChange(e.target.value)}
            className="rounded-md border border-border-subtle bg-bg-surface px-3 py-1 text-xs text-text-primary outline-none focus:border-brand-emerald transition-colors"
          >
            {paths.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 border-l border-border-subtle pl-3">
        <button 
          onClick={onToggleTheme}
          className="flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle"
          title={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
        <button 
          onClick={onOpenSettings}
          className="flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle"
          title="Configuración"
        >
          <Settings size={14} />
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
