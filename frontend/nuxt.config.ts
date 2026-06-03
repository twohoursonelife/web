export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/ui',
    'nuxt-gtag',
    '@nuxtjs/seo'
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
