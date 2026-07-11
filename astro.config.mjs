// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: https://mithilyaganti.github.io/portfolio/
// If you use a custom domain or username.github.io repo, set base to '/'.
export default defineConfig({
  site: 'https://mithilyaganti.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
