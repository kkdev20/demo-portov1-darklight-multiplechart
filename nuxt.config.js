export default {
  // Global page headers
  head: {
    title: 'Portfolio Analytics Platform',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Advanced real-time portfolio analytics and performance monitoring for institutional investors and fund managers' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
    ]
  },

  // Global CSS
  css: ['~/assets/css/main.css'],

  // Plugins
  plugins: [],

  // Auto import components
  components: true,

  // Modules
  modules: ['@nuxtjs/tailwindcss'],

  // Server middleware untuk API proxy
  serverMiddleware: [
    '~/serverMiddleware/api-history.js',
    '~/serverMiddleware/api-latest.js'
  ],

  // Build configuration
  build: {
    transpile: ['chart.js']
  },

  // Server-side rendering
  ssr: false,

  // Generate configuration for static deployment (SPA mode)
  generate: {
    fallback: '404.html',
    dir: 'dist'
  },
  
  // Target static
  target: 'static'
}

