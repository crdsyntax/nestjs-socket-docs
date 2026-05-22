import { RefreshCw } from "lucide-react";

const LoadingScreen = () => (
  <div className="flex min-h-screen items-center justify-center bg-bg-primary text-brand-emerald">
    <RefreshCw className="animate-spin" size={32} />
    <span className="ml-4 text-xl font-medium">Cargando contratos...</span>
  </div>
);

export default LoadingScreen;
