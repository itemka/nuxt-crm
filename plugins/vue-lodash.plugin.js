import Vue from 'vue'
import VueLodash from 'vue-lodash'
import chunk from 'lodash.chunk'
import size from 'lodash.size'

Vue.use(VueLodash, {
  name: 'custom',
  lodash: {
    chunk,
    size,
  },
})
