import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library';
  
  return {
    base: isLibrary ? '/' : '/socket-docs/',
    plugins: [react()],
    build: {
      outDir: isLibrary ? 'dist' : '../core/ui-dist',
      emptyOutDir: true,
      lib: isLibrary ? {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'SocketDocsUI',
        formats: ['es', 'umd'],
        fileName: (format) => `index.${format}.js`,
      } : undefined,
      rollupOptions: {
        external: isLibrary ? ['react', 'react-dom', 'lucide-react', 'socket.io-client'] : [],
        output: isLibrary ? {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'lucide-react': 'LucideReact',
            'socket.io-client': 'io',
          },
        } : {},
      },
    },
  };
});
