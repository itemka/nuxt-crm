<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" v-on:click.prevent="$emit('click-navbar-menu')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date('datetime') }}</span>
      </div>
      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdownRef"
          >
            {{ userName }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>
          <ul id='dropdown' class='dropdown-content'>
            <li>
              <nuxt-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>{{ 'Profile' | localize }}
              </nuxt-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a
                href="#"
                class="black-text"
                v-on:click.prevent="logout"
              >
                <i class="material-icons">assignment_return</i>{{ 'LogOut' | localize }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)

    this.dropdown = this.$initMaterializeDropdown(this.$refs.dropdownRef)
  },
  beforeDestroy() {
    clearInterval(this.interval)

    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  },
  computed: {
    userName() {
      return this.$store.getters['info/getInfo'].name || null
    }
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('auth/logout')
        this.$router.push('/login?message=logout')
      } catch (error) {
        console.log('methods logout')
      }
    }
  }
}
</script>
