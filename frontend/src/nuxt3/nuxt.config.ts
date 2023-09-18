// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "path";

export default defineNuxtConfig({
  // @ts-ignore
  ssr: false,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Task',
      htmlAttrs: {
        lang: 'pt-br',
      },
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],

  css: [
    '~/assets/css/main.css',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/tailwind.config.js',
    viewer: false,
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      mockBaseUrl: process.env.MOCK_BASE_URL,
    },
  },

} as any)
