import Vue from 'vue'
import M from 'materialize-css'

Vue.use({
  install(Vue) {
    Vue.prototype.$initMaterializeDropdown = function (ref) {
      M.Dropdown.init(ref)
    }

    Vue.prototype.$updateTextFields = function () {
      M.updateTextFields()
    }

    Vue.prototype.$formSelect = function (ref) {
      M.FormSelect.init(ref)
    }
  },
})
