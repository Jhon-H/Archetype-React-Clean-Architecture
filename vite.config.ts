import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), viteTsconfigPaths()],
  envDir: './src/config/environment',
  envPrefix: 'PUBLIC_ENV_',
  server: { port: 3000 },
  preview: { port: 3000 },
  resolve: {
    alias: { '@': '/src' },
  },
});
