import firebase from 'firebase/app'

export const state = () => ({
  info: {
    locale: 'en-EN', // TODO remove it
  },
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
      const uid = await dispatch('getUserId')
      const info =
        (
          await firebase.database().ref(`/users/${uid}/info`).once('value')
        ).val() || {}

      commit('setInfo', info)
    } catch (error) {
      commit('setError')
      throw error
    }
  },
  async updateInfo({ commit, dispatch, getters }, toUpdate) {
    try {
      const uid = await dispatch('getUserId')
      const updatedData = { ...getters.info, ...toUpdate }

      await firebase.database().ref(`/users/${uid}/info`).update(updatedData)

      commit('setInfo', updatedData)
    } catch (error) {
      commit('setError')
      throw error
    }
  },
}

export const getters = {
  getInfo: (state) => state.info,
}
