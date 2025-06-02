// new-vite-frontend/vitest.config.ts

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; 

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    
    setupFiles: [path.resolve(__dirname, './src/setupTests.ts')], 
  },
});
