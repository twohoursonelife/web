export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Not applicable while on GitHub Pages static site
  // routeRules: {
  //   '/img/**': { headers: { 'cache-control': 'public, max-age=2592000' } }, // 30 days
  //   '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } } // 1 year
  // },

  modules: [
    '@nuxt/fonts',
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
    id: 'G-JKZYDCL7PX'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/icon.png' }
      ]
    }
  },

  fonts: {
    families: [
      { name: 'Montserrat', weights: [700, 800, 900] },
      { name: 'Quicksand', weights: [400, 500, 600, 700] }
    ]
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
