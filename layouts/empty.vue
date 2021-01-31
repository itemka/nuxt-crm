<template>
  <div class="grey darken-1 empty-layout">
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { MESSAGES } from '@/utils/constants'

export default {
  layout: 'empty',
  computed: {
    ...mapGetters(['getError'])
  },
  watch: {
    getError(firebaseError) {
      const { code = '', message = 'Something wrong' } = firebaseError;

      this.$error(MESSAGES[code] || `${code} | ${message}`)
    }
  }
}
</script>
