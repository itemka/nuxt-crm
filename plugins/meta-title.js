import Vue from 'vue'
import { localizeFilter } from '@/filters/localize'

export default function ({ store }) {
  Vue.use({
    install(Vue) {
      Vue.prototype.$getMetaTitle = function (titleKey) {
        return `${localizeFilter(store, titleKey)} | ${
          process.env.VUE_APP_TITLE
        }`
      }
    },
  })
}
