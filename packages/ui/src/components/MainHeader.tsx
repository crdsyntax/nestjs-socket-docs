import React from "react";
import { Sun, Settings, Moon } from "lucide-react";
import { translations } from "../locales/es";

interface MainHeaderProps {
  connected: boolean;
  gatewayPath: string;
  namespace: string;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const MainHeader = ({
  connected,
  gatewayPath,
  namespace,
  theme,
  onToggleTheme,
}: MainHeaderProps) => {
  return (
    <div className="flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6">
      <div className="flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs">
        <div className={`h-2 w-2 rounded-full ${connected ? "bg-brand-emerald" : "bg-red-500"}`} />
        <span>{connected ? translations.common.connected : translations.common.disconnected}</span>
        <span className="text-text-muted">{gatewayPath}</span>
      </div>
      <select className="rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none">
        <option>{namespace}</option>
      </select>
      <button 
        onClick={onToggleTheme}
        className="flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle"
      >
        {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
      </button>
      <button className="flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle">
        <Settings size={14} />
      </button>
    </div>
  );
};

export default MainHeader;
