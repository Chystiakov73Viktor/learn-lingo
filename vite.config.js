import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { envConfig } from 'vite-plugin-env-config';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react(), svgr(), envConfig()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      constants: '/src/constants',
      images: '/src/images',
    },
  },
  base: '/learn-lingo/',
});
