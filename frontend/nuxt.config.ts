export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  routeRules: {
    '/img/**': { headers: { 'cache-control': 'public, max-age=2592000' } }, // 30 days
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } } // 1 year
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/ui',
    'nuxt-gtag',
    '@nuxtjs/seo',
    '@nuxt/image'
  ],

  site: {
    url: 'https://twohoursonelife.com',
    name: 'Two Hours One Life',
    defaultLocale: 'en'
  },

  gtag: {
    id: '' // TODO
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
        { rel: 'icon', type: 'image/png', href: '/img/icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
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
