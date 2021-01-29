import Vue from 'vue'

Vue.filter('currency', function (value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value)
})
