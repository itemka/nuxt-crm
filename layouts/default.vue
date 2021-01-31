<template>
  <div>
    <!-- TODO -->
    <!-- <Loader v-if="loading" /> -->
    <!-- <div v-else class="app-main-layout"> -->
    <div class="app-main-layout">
      <Nav v-on:click-navbar-menu="handleClickNavbarMenu" />
      <Sidenav
        v-model="isOpen"
      />
        <!-- :key="locale" -->
      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <Nuxt />
        </div>
      </main>
      <BottomButton />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Nav from '@/components/Nav.vue'
import Sidenav from '@/components/Sidenav.vue'
import BottomButton from '@/components/BottomButton.vue'
import { MESSAGES } from '@/utils/constants'

export default {
  name: 'main-layout',
  async fetch({ store }) {
    try {
      // const inf = store.getters['info/getInfo']
      // console.log({inf})

      // await store.dispatch('fetchInfo')

      // if (!Object.keys(store.getters['info/getInfo']).length) {

      // }

      // TODO this.loading = false
    } catch (error) {}
  },
  data: () => ({
    isOpen: true,
    // TODO loading: true
  }),
  async mounted() {
    try {
      if (!Object.keys(this.$store.getters['info/getInfo']).length) {
        await this.$store.dispatch('info/fetchInfo')
      }

      // TODO this.loading = false
    } catch (error) {}
  },
  methods: {
    handleClickNavbarMenu() {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    ...mapGetters({
      getError: 'common/getError'
    }),
    locale() {
      return this.$store.getters['info/getInfo'].locale || 'en'
    }
  },
  watch: {
    getError(firebaseError) {
      const { code = '', message = 'Something wrong' } = firebaseError;

      console.log({firebaseError})

      this.$error(MESSAGES[code] || `${code} | ${message}`)
    }
  },
  components: {
    Nav,
    Sidenav,
    BottomButton
  }
}
</script>

<style>
</style>
