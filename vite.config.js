import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Production build is minified (esbuild) and split into vendor + route chunks.
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: { manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom'] } },
    },
  },
});
