import { cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: `${projectRoot}index.html`,
        concept: `${projectRoot}concept/index.html`,
      },
      output: {
        manualChunks: (id) => (id.includes('node_modules') ? 'vendor' : undefined),
      },
    },
  },
  plugins: [
    react(),
    {
      name: 'copy-static-blog',
      apply: 'build',
      async closeBundle() {
        const destination = `${projectRoot}dist/blog`;
        await rm(destination, { recursive: true, force: true });
        await cp(`${projectRoot}blog`, destination, { recursive: true });
      },
    },
  ],
});
