import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

export default function ({ store }) {
  Vue.filter('date', function (value, format = 'date') {
    const storeLocale = store.getters['info/getInfo'].locale || null
    const locale = (storeLocale && storeLocale.substr(0, 2)) || 'en'
    let displayFormat = ''

    if (format.includes('date')) {
      displayFormat = `${locale === 'en' ? 'MMMM D, YYYY' : 'D MMMM, YYYY'}`
    }

    if (format.includes('time')) {
      displayFormat = `${displayFormat} ${
        locale === 'en' ? 'h:mm:ss A' : 'h:mm:ss'
      }`
    }

    return dayjs(new Date(value)).locale(locale).format(displayFormat)
  })
}
