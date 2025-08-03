import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  ssr: {
    noExternal: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async', 'react-toastify']
  }
});
