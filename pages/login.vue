<template>
  <section>
    <form v-on:submit.prevent="handleSubmit">
      <div v-if="$route.query.message" class="alert alert-danger mb-3">
        Need login first
      </div>
      <h1>Login page</h1>
      <div class="form-grup">
        <input type="text" class="form-control">
      </div>
      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'empty',
  methods: {
    ...mapActions(['login']),
    handleSubmit() {
      this.login()
      this.$router.push('/')
    }
  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
form {
  width: 500px;
  margin: 0 auto;
}
</style>
