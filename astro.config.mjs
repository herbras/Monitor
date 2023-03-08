import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import node from "@astrojs/node";
import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";
import {presetDaisy} from 'unocss-preset-daisy';
import presetUno from '@unocss/preset-uno';
import transformerDirectives from '@unocss/transformer-directives';
import presetWebFonts from '@unocss/preset-web-fonts'
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({transformers: [transformerDirectives()],
    presets: [presetUno(), presetDaisy(),presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),],}), 
    
    
    react(), alpinejs()],
  output: "server",
  adapter: vercel()
});