import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "pages", "index.html"),
        contact: resolve(root, "pages", "contact", "index.html"),
        projects: resolve(root, "pages", "projects", "index.html")
      }
    }
  },
});
