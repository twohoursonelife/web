export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/ui',
    'nuxt-gtag'
  ],

  gtag: {
    id: '' // Add your Google Analytics G-XXXXXXXXXX ID here, or set NUXT_PUBLIC_GTAG_ID env variable
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'robots', content: 'noindex, nofollow' } // TODO
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Quicksand:wght@400;500;600;700&display=swap' }
      ]
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})
