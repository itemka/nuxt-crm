export const state = () => ({
  info: {},
})

export const mutations = {
  setInfo(state, info) {
    state.info = info
  },
  clearInfo(state) {
    state.info = {}
  },
}

export const actions = {
  async fetchInfo({ commit, dispatch }) {
    try {
      // TODO const uid = await dispatch('auth/getUserId')
      const uid = await this.$fire.auth.currentUser.uid
      const info =
        (
          await this.$fire.database.ref(`/users/${uid}/info`).once('value')
        ).val() || {}

      commit('setInfo', info)
    } catch (error) {
      console.log(error) // TODO
      commit('setError')
      throw error
    }
  },
  async updateInfo({ commit, dispatch, getters }, toUpdate) {
    try {
      // TODO // const uid = await dispatch('auth/getUserId')
      const uid = await this.$fire.auth.currentUser.uid
      const updatedData = { ...getters.info, ...toUpdate }

      await this.$fire.database.ref(`/users/${uid}/info`).update(updatedData)

      commit('setInfo', updatedData)
    } catch (error) {
      console.log(error) // TODO
      commit('setError')
      throw error
    }
  },
}

export const getters = {
  getInfo: ({ info }) => info,
}
