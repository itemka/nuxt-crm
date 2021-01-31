export const state = () => ({
  uid: null,
})

export const mutations = {
  setCurrentUserId(state, uid) {
    state.uid = uid
  },
}

export const actions = {
  async login({ commit }, { email, password }) {
    try {
      await this.$fire.auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error) // TODO
      commit('common/setError', error)
      throw error
    }
  },
  async logout({ commit }) {
    try {
      await this.$fire.auth.signOut()

      commit('info/clearInfo')
    } catch (error) {
      console.log(error) // TODO
      commit('setError', error)
      throw error
    }
  },
  async getUserId({ commit }) {
    try {
      const { uid = null } = await this.$fire.auth.currentUser

      commit('setCurrentUserId', uid)

      return uid
    } catch (error) {
      console.log(error) // TODO
      commit('setError', error)
      throw error
    }
  },
  async register({ commit, dispatch }, { email, password, name }) {
    try {
      await this.$fire.auth.createUserWithEmailAndPassword(email, password)

      const uid = await dispatch('getUserId')

      await this.$fire.database.ref(`/users/${uid}/info`).set({
        bill: 1000,
        name,
        locale: 'en-US',
      })
    } catch (error) {
      console.log(error) // TODO
      commit('setError', error)
      throw error
    }
  },
}

export const getters = {
  getUid: ({ uid }) => uid,
}
