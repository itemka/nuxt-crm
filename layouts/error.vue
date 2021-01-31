<template>
  <section>
    <h1
      class="container-not-found"
      :color="$scss.textError"
    >
      Error 404
    </h1>
    <nuxt-link to="/" class="btn btn-primary">Home</nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'PageNotFound',
  layout: 'empty',
  head() {
    return {
      title: this.$getMetaTitle('Title_PageNotFound')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

section {
  margin: 0 auto;
  padding-top: 5rem;

  &>h1 {
    color: $textError;
  }
}
</style>
