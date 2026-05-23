import React from "react";
import { translations } from "../locales/es";

interface EventDetailsProps {
  gatewayName: string;
  eventName: string;
  summary: string;
  description: string;
}

const EventDetails = ({
  gatewayName,
  eventName,
  summary,
  description,
}: EventDetailsProps) => {
  return (
    <>
      <div className="mb-4 flex gap-2 text-sm text-text-secondary">
        <span>{gatewayName}</span> / <span>events</span> / <span className="font-medium text-text-primary">{eventName}</span>
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
