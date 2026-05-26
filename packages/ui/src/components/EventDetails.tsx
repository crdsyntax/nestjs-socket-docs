import React from "react";
import { translations } from "../locales/es";
import { Lock, Shield, Key, User } from "lucide-react";

interface EventDetailsProps {
  gatewayName: string;
  eventName: string;
  summary: string;
  description: string;
  auth?: 'JWT' | 'API_KEY' | 'BASIC' | 'NONE';
}

const AuthBadge = ({ type }: { type: 'JWT' | 'API_KEY' | 'BASIC' | 'NONE' }) => {
  const configs = {
    JWT: {
      icon: <Shield size={12} />,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      desc: "Requiere token Bearer JWT en el campo auth.token."
    },
    API_KEY: {
      icon: <Key size={12} />,
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      desc: "Requiere una clave de API válida enviada en los headers o query."
    },
    BASIC: {
      icon: <User size={12} />,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      desc: "Autenticación básica de usuario/contraseña."
    },
    NONE: {
      icon: null,
      color: "bg-gray-500/10 text-gray-500 border-gray-500/20",
      desc: "No requiere autenticación."
    }
  };

  const config = configs[type] || configs.NONE;
  if (type === 'NONE') return null;

  return (
    <div className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase ${config.color}`} title={config.desc}>
      {config.icon}
      <span>{type}</span>
    </div>
  );
};

const EventDetails = ({
  gatewayName,
  eventName,
  summary,
  description,
  auth
}: EventDetailsProps) => {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2 text-sm text-text-secondary">
          <span>{gatewayName}</span> / <span>events</span> / <span className="font-medium text-text-primary">{eventName}</span>
        </div>
        {auth && <AuthBadge type={auth} />}
      </div>

      <div className="mb-2 flex items-center gap-3">
        <span className="rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald">{translations.event.type}</span>
        <span className="font-mono text-xl font-semibold">{eventName}</span>
        <span className="text-sm text-text-secondary">{summary}</span>
      </div>

      <p className="mb-6 leading-relaxed text-text-secondary">
        {description || "No description provided for this event."}
      </p>
    </>
  );
};

export default EventDetails;
