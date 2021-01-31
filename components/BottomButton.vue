<template>
  <div class="fixed-action-btn">
    <nuxt-link
      to="/record"
      v-tooltip="tooltipMessage"
      class="btn-floating btn-large blue"
      :key="tooltipMessage"
      :exact="true"
      :no-prefetch="true"
    >
      <i class="large material-icons">add</i>
    </nuxt-link>
  </div>
</template>

<script>
import { localizeFilter } from '@/filters/localize.js'

export default {
  computed: {
    tooltipMessage() {
      return localizeFilter(this.$store, 'Message_CreateNewRecord')
    }
  }
}
</script>
