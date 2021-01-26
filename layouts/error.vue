<template>
  <section>
    <h1 :color="$scss.textError">Error 404</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

section {
  width: 600px;
  margin: 0 auto;
  padding-top: 5rem;

  &>h1 {
    color: $textError;
  }
}
</style>
