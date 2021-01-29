import Vue from 'vue'
import M from 'materialize-css'

Vue.directive('tooltip', {
  bind(el, { value }) {
    M.Tooltip.init(el, { html: value, position: 'top' })
  },
  unbind(el) {
    const tooltip = M.Tooltip.getInstance(el)
    if (tooltip && tooltip.destroy) {
      tooltip.destroy()
    }
  },
})
