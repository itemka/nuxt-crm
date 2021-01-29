import Vue from 'vue'
import M from 'materialize-css'
import { localizeFilter } from '@/filters/localize.filter'

export default function ({ store }) {
  Vue.use({
    install(Vue) {
      Vue.prototype.$message = function (value) {
        M.toast({ html: localizeFilter(store, value) })
      }

      Vue.prototype.$error = function (value) {
        console.log({ value })
        M.toast({
          html: `[Error]: ${
            value.includes('ServerCodeMessage_')
              ? localizeFilter(store, value)
              : value
          }`,
        })
      }
    },
  })
}
