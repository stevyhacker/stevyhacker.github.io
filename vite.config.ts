import { cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
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
