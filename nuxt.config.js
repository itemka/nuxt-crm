// import webpack from 'webpack'

export default {
  dev: process.env.NODE_ENV !== 'production',
  env: {
    baseURL: process.env.BASE_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-crash-course | Artyom Pavlenko',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/node_modules/bootstrap/dist/css/bootstrap.min.css'],

  loading: {
    color: 'green',
    height: '5px',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-lodash.js',
    // '~/plugins/debounce.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/dotenv',
    //
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/webpackmonitor',
    'nuxt-scss-to-js',
    '@nuxtjs/axios',
    // TODO 'nuxt-babel',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: ['lodash'],
    // analyze: {
    //   analyzerMode: 'static',
    // },
    // plugins: [
    // new webpack.ProvidePlugin({
    //   // global modules
    //   _: 'lodash',
    // }),
    // ],
  },
}
