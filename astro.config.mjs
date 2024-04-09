import node from '@astrojs/node';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});