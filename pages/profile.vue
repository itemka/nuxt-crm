<template>
  <div :key="Object.keys(info).length">
    <div class="page-title">
      <h3>{{ 'Profile' | localize }}</h3>
    </div>
    <form class="form" v-on:submit.prevent="handleSubmit">
      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model.trim="name"
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
        >
        <label for="description">{{ 'Name' | localize }}</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >
          {{ 'Message_EnterName' | localize }}
        </small>
      </div>
      <div class="switch">
        <label>
          Русский
          <input type="checkbox" v-model="isEnLocale">
          <span class="lever"></span>
          English
        </label>
      </div>
      <button class="btn waves-effect waves-light" type="submit">
        {{ 'Update' | localize }} <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Profile',
  head() {
    return {
      title: this.$getMetaTitle('Profile')
    }
  },
  data: () => ({
    name: '',
    isEnLocale: true
  }),
  validations: {
    name: {
      required
    }
  },
  computed: {
    ...mapGetters({
      info: 'info/getInfo'
    })
  },
  watch: {
    info() {
      this.start()
    }
  },
  mounted() {
    this.start()
  },
  methods: {
    ...mapActions({
      updateInfo: 'info/updateInfo'
    }),
    start() {
      this.name = this.info.name
      this.isEnLocale = this.info.locale === 'en-US'

      setTimeout(() => {
        this.$updateTextFields()
      }, 0)
    },
    async handleSubmit() {
      try {
        if (this.$v.$invalid) {
          this.$v.$touch()

          return
        }

        await this.updateInfo({
          name: this.name,
          locale: this.isEnLocale ? 'en-US' : 'ru-RU'
        })

        this.$message('Message_ProfileInfoUpdated')
      } catch (error) {}
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  margin-bottom: 2rem;
}
</style>
