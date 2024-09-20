/// <reference types="vitest" />
/// <reference types="vite/client" />
// 👆 do not forget to add the references above 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  build: {
    target: 'esnext',
  },
  test:{
    environment: 'jsdom',
    globals: true
  }
});