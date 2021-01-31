import Vue from 'vue'

export function currencyFilter(value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value)
}

Vue.filter('currency', currencyFilter)
