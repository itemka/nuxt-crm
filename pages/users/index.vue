<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        <a href="#" v-on:click.prevent="openUser(user.id)">
          {{ user.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters['users/getUsers'].length === 0) {
      await store.dispatch('users/fetchUsers')
    }
  },
  data: () => ({
    pageTitle: 'Users'
  }),
  computed: {
    users() {
      return this.$store.getters['users/getUsers']
    }
  },
  methods: {
    openUser(id) {
      this.$router.push(`/users/${id}`)
    }
  }
}
</script>
