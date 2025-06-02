// new-vite-frontend/vitest.config.ts

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; // Keep this import

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    // <--- CORRECT THIS LINE
    setupFiles: [path.resolve(__dirname, './src/setupTests.ts')], // <-- CORRECT PATH
    // You can remove the commented out alias if you don't need it
    // alias: {
    //   '@': new URL('./src/', import.meta.url).pathname,
    // },
  },
});