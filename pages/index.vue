<template>
  <div>
    <div class="page-title">
      <h3>{{ 'Title_Account' | localize }}</h3>
      <button
        class="btn waves-effect waves-light btn-small"
        v-on:click.prevent="refresh"
      >
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <!-- <Loader v-if="loading" /> -->
    <!-- <div v-else class="row"> -->
    <div class="row" v-if="currency" :key="currency">
      <HomeBill :rates="currency.rates" />
      <HomeCurrency
        :rates="currency.rates"
        :date="currency.date"
      />
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill.vue'
import HomeCurrency from '@/components/HomeCurrency.vue'

export default {
  // async asyncData() {
  //   try {
  //     this.currency = await this.$store.dispatch('fetchCurrency')
  //   } catch (error) {}
  // },
  name: 'Home',
  head() {
    return {
      title: this.$getMetaTitle('Menu_Account'),
      meta: [
        {
          hid: 'Menu Account',
          name: 'Menu Account',
          content: 'Menu Account'
        }
      ]
    }
  },
  data: () => ({
    // loading: true,
    // currency: null
  }),
  computed: {
    currency() {
      return this.$store.getters.getCurrency || null
    }
  },
  async mounted() {
    try {
      this.currency = await this.$store.dispatch('common/fetchCurrency')
      // this.loading = false
    } catch (error) {}
  },
  methods: {
    // async refresh() {
    async refresh() {
      try {

        this.$nuxt.$loading.start()
        // this.loading = true
        this.currency = await this.$store.dispatch('common/fetchCurrency')
        // const currency = await new Promise(function (resolve) {
        //   setTimeout(function () {
        //     resolve({
        //       success: true,
        //       timestamp: 1612024386,
        //       base: 'EUR',
        //       date: '2021-01-30',
        //       rates: {
        //         USD: 2.21375,
        //         EUR: 1,
        //         BYN: 3.174423,
        //       },
        //     });
        //   }, 1000);
        // });
        // this.$store.commit('setCurrency', currency)

        this.$nuxt.$loading.finish()
        // this.loading = false
      } catch (error) {}
    }
  },
  components: {
    HomeBill,
    HomeCurrency
  }
}
</script>
