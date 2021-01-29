import Vue from 'vue'
import { LOCALES } from '@/utils/constants'

export function localizeFilter(store, key) {
  return (
    LOCALES[store.getters['info/getInfo'].locale.substr(0, 2) || 'en'][key] ||
    `[Localize error]: key ${key} not found`
  )
}

export default function ({ store }) {
  Vue.filter('localize', function (key) {
    return localizeFilter(store, key)
  })
}
