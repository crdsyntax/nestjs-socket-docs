import { RefreshCw, AlertCircle } from "lucide-react";
import React from "react";

const LoadingScreen = () => {
  const [showTip, setShowTip] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowTip(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary text-brand-emerald p-6 text-center">
      <RefreshCw className="animate-spin mb-4" size={48} />
      <span className="text-xl font-medium mb-2">Cargando contratos...</span>
      
      {showTip && (
        <div className="mt-8 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center justify-center gap-2 text-orange-400 mb-2">
            <AlertCircle size={20} />
            <span className="font-bold uppercase text-xs tracking-wider">¿Demasiado tiempo?</span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            Parece que la carga está tardando más de lo normal. 
            Verifica la <b>consola del navegador (F12)</b> para ver errores de red o configuración.
          </p>
          <button 
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="mt-4 px-4 py-2 bg-bg-surface border border-border-subtle rounded-md text-xs font-medium hover:bg-border-subtle transition-colors text-text-primary"
          >
            Resetear Configuración y Reintentar
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
