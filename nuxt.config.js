import webpack from 'webpack'
import { getEnvVariables, isDev } from './utils/helper'
import { FIREBASE_KEY_NAMES } from './utils/constants'

const FIREBASE_CONFIG = getEnvVariables(process.env, FIREBASE_KEY_NAMES)

export default {
  dev: isDev(),
  env: {
    baseURL: process.env.BASE_URL,
  },
  vue: {
    config: {
      productionTip: !isDev(),
      devtools: isDev(),
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt CRM | Artyom Pavlenko',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/materialize-css/dist/css/materialize.min.css',
    '~/assets/scss/index.scss',
  ],

  // loading: {
  //   color: 'green',
  //   height: '5px',
  // },
  loading: '~/components/Loader.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/components.js', mode: 'client' },
    { src: '~/plugins/materialize.js', mode: 'client' },
    { src: '~/plugins/message.js', mode: 'client' },
    { src: '~/plugins/meta-title.js' },
    { src: '~/plugins/vue-lodash.js' },
    { src: '~/plugins/vuelidate.js' },
    { src: '~/filters/currency.js' },
    { src: '~/filters/date.js' },
    { src: '~/filters/localize.js' },
    { src: '~/directives/tooltip.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
    //
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/webpackmonitor',
    'nuxt-scss-to-js',
    '@nuxtjs/axios',
    // TODO 'nuxt-babel',
    [
      '@nuxtjs/firebase',
      {
        config: FIREBASE_CONFIG,
        services: {
          auth: {
            initialize: {
              onAuthStateChangedMutation: 'auth/setCurrentUserId',
              onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
              subscribeManually: false,
            },
            ssr: true,
          },

          database: {},
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: ['lodash'],
    // analyze: {
    //   analyzerMode: 'static',
    // },
    plugins: [
      new webpack.ProvidePlugin({
        Materialize: 'materialize-css',
      }),
    ],
  },
}
