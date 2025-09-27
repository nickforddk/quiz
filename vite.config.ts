import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use / during dev, /quiz/ only for production build (GitHub Pages project site)
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/quiz/' : '/',
  plugins: [react()]
}));