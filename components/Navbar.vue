<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nuxt SSR</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="link in links"
            :key="link.title"
            class="nav-item"
          >
            <nuxt-link
              :to="link.path"
              :exact="link.exact"
              :no-prefetch="link.noPrefetch"
              active-class="active"
              class="nav-link"
            >
              {{ link.title }}
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="!getToken">
            <nuxt-link
              to="/login"
              active-class="active"
              class="nav-link"
            >
              Login
            </nuxt-link>
          </li>
          <li class="nav-item" v-else>
            <a
              v-on:click.prevent="handleLogout"
              class="nav-link"
              href="#"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      { path: '/', title: 'Home', exact: true, noPrefetch: true },
      { path: '/about', title: 'About', exact: true, noPrefetch: true },
      { path: '/users', title: 'Users', exact: true, noPrefetch: true },
    ]
  }),
  computed: {
    getToken() {
      return this.$store.getters.getToken
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
