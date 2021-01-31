<template>
  <ul
    class="sidenav app-sidenav"
    :class="{ open: value }"
    :key="userLocale"
  >
    <nuxt-link
      tag="li"
      v-for="(link, i) in sidenav"
      :key="i"
      :to="link.path"
      :exact="link.exact"
      :no-prefetch="link.noPrefetch"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer active">
        {{ link.title | localize }}
      </a>
    </nuxt-link>
  </ul>
</template>

<script>
// import localizeFilter from '@/filters/localize'

export default {
  // asyncData({ $store }) {
  //   return {
  //     sidenav: [
  //     { path: '/', title: localizeFilter($store, 'Menu_Account'), noPrefetch: true, exact: true },
  //     { path: '/history', title: localizeFilter($store, 'Menu_History'), noPrefetch: true },
  //     { path: '/planning', title: localizeFilter($store, 'Menu_Planning'), noPrefetch: true},
  //     { path: '/record', title: localizeFilter($store, 'Menu_NewRecord'), noPrefetch: true },
  //     { path: '/categories', title: localizeFilter($store, 'Menu_Categories'), noPrefetch: true },
  //   ]
  //   }
  // },
  name: 'Sidenav',
  props: ['value'],
  data: () => ({
    sidenav: [
      { path: '/', title: 'Menu_Account', noPrefetch: true, exact: true },
      { path: '/history', title: 'Menu_History', noPrefetch: true },
      { path: '/planning', title: 'Menu_Planning', noPrefetch: true},
      { path: '/record', title: 'Menu_NewRecord', noPrefetch: true },
      { path: '/categories', title: 'Menu_Categories', noPrefetch: true },
    ]
  }),
  computed: {
    userLocale() {
      return this.$store.getters['info/getInfo'].locale || 'en'
    }
  }
}
</script>
