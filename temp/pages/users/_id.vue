<template>
  <section>
    <h1>User {{ $route.params.id }}</h1>
    <pre>{{ JSON.stringify(user, null, 2) }}</pre>
  </section>
</template>

<script>
export default {
  async asyncData({ redirect, $axios, params: { id = null } }) {
    if (!id) {
      redirect(`${process.env.API_URL}/users`)
    }

    const user = await $axios.$get(`${process.env.API_URL}/users/${+id}`)

    return { user }
  },
  validate({ params: { id } }) {
    return /^\d+$/.test(id)
  }
}
</script>
