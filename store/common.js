export const state = () => ({
  error: null,

  // currency: {
  //   success: true,
  //   timestamp: 1612024386,
  //   base: 'EUR',
  //   date: '2021-01-30',
  //   rates: {
  //     USD: 1.21375,
  //     EUR: 1,
  //     BYN: 3.174423,
  //   },
  // },
})

export const mutations = {
  setError(state, error) {
    state.error = error
  },
  clearError(state) {
    state.error = null
  },
  // setCurrency(state, currency) {
  //   state.currency = currency
  // },
}

export const actions = {
  async fetchCurrency({ commit }) {
    try {
      const currency = await fetch(
        `${process.env.VUE_APP_PROXY_URL}http://data.fixer.io/api/latest?access_key=${process.env.VUE_APP_FIXER_ACCESS_KEY}&symbols=USD,EUR,BYN`
      )

      // const currency = await JSON.stringify(
      //   setTimeout(
      //     () => ({
      //       success: true,
      //       timestamp: 1612024386,
      //       base: 'EUR',
      //       date: '2021-01-30',
      //       rates: {
      //         USD: 1.21375,
      //         EUR: 1,
      //         BYN: 3.174423,
      //       },
      //     }),
      //     1000
      //   )
      // )

      return await currency.json()
    } catch (error) {
      commit('setError', error)
      throw error
    }
  },
}

export const getters = {
  getError: ({ error }) => error,
  getCurrency: ({ currency }) => currency,
}

// import createLogger from 'vuex/dist/logger'
// import 'es6-promise/auto'

// const debug = process.env.NODE_ENV !== 'production';

// export default new Vuex.Store({
//   modules: {},
//   strict: debug,
//   plugins: debug ? [ createLogger() ] : [],
// })
