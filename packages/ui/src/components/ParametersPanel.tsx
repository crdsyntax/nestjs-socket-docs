import React from "react";
import { translations } from "../locales/es";
import { Braces, Info, ChevronDown, ChevronRight } from "lucide-react";

interface ParametersPanelProps {
  schema?: any;
  responseSchema?: any;
}

const ParametersPanel = ({ schema, responseSchema }: ParametersPanelProps) => {
  const [activeTab, setActiveTab] = React.useState<"request" | "response">("request");
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const renderJsonSchema = (obj: any) => {
    return JSON.stringify(obj, null, 2);
  };

  const hasRequest = !!schema && Object.keys(schema?.properties || {}).length > 0;
  const hasResponse = !!responseSchema && Object.keys(responseSchema?.properties || {}).length > 0;

  if (!hasRequest && !hasResponse) {
    return (
      <div className="mb-4 flex items-center gap-2 text-text-secondary italic">
        <Braces size={14} className="opacity-40" />
        <span className="text-[12px]">{translations.event.noParameters}</span>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center gap-4 border-b border-border-subtle pb-2 text-[13px]">
        <div 
          className="flex items-center gap-2 mr-2 cursor-pointer hover:text-brand-emerald transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <Braces size={14} className="text-brand-emerald" />
          <span className="font-bold uppercase tracking-wider text-text-primary text-[11px]">{translations.event.parameters}</span>
        </div>
        
        {isExpanded && (
          <>
            <button 
              onClick={() => setActiveTab("request")}
              className={`pb-1.5 transition-colors ${activeTab === "request" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`}
            >
              Request Schema
            </button>
            
            {hasResponse && (
              <button 
                onClick={() => setActiveTab("response")}
                className={`pb-1.5 transition-colors ${activeTab === "response" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`}
              >
                Response Schema
              </button>
            )}
          </>
        )}
      </div>

      {isExpanded && (
        <div className="relative group">
          <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] bg-bg-elevation px-2 py-1 rounded border border-border-subtle font-bold text-text-muted uppercase">JSON Schema</span>
          </div>
          <pre className="overflow-x-auto rounded-md bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-brand-emerald/90 custom-scrollbar max-h-[400px]">
            {activeTab === "request" ? renderJsonSchema(schema) : renderJsonSchema(responseSchema)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ParametersPanel;
