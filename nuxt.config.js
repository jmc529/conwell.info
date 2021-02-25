export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Joseph Conwell',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "A portfolio and personal blog of Joseph Conwell's.",
      },
      { hid: 'title', name: 'title', content: "Joseph Conwell's Portfolio" },
      // { hid: 'image', name: 'image', content: '~static/sitemeta.svg' },
      { hid: 'url', name: 'url', content: 'https://conwell.info' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~sass/buefy-overwrite.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/svg-module#nuxtjssvg
    '@nuxtjs/svg',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/style-resources-module#readme
    '@nuxtjs/style-resources',
    // https://www.npmjs.com/package/nuxt-lazy-load
    'nuxt-lazy-load',
  ],

  // buefy options
  buefy: {
    materialDesignIcons: false,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // cache policy
  render: {
    static: {
      maxAge: 60 * 60 * 24 * 30 * 3 * 1000, // ~3 months
    },
  },

  // g-analytics options
  googleAnalytics: {
    id: 'UA-131468646-1',
  },
}
