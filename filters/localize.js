import Vue from 'vue'
import { LOCALES } from '@/utils/constants'

export function localizeFilter(store, key) {
  const locale = store.getters['info/getInfo'].locale || null

  return (
    LOCALES[(locale && locale.substr(0, 2)) || 'en'][key] ||
    `[Localize error]: key ${key} not found`
  )
}

export default function ({ store }) {
  Vue.filter('localize', function (key) {
    return localizeFilter(store, key)
  })
}
