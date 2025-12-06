import { defineConfig } from '@tanstack/start/config';
import tailwindcss from '@tailwindcss/vite';
import tanstackRouter from '@tanstack/router-plugin/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss(), tanstackRouter()],
  },
});
