import firebase from 'firebase/app'

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
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      commit('setError', error)
      throw error
    }
  },
  async logout({ commit }) {
    try {
      await firebase.auth().signOut()

      commit('clearInfo')
    } catch (error) {
      commit('setError', error)
      throw error
    }
  },
  async getUserId({ commit }) {
    try {
      const { uid = null } = await firebase.auth().currentUser

      commit('setCurrentUserId', uid)

      return uid
    } catch (error) {
      commit('setError', error)
      throw error
    }
  },
  async register({ commit, dispatch }, { email, password, name }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)

      const uid = await dispatch('getUserId')

      await firebase.database().ref(`/users/${uid}/info`).set({
        bill: 1000,
        name,
        locale: 'en-US',
      })
    } catch (error) {
      commit('setError', error)
      throw error
    }
  },
}

export const getters = {
  getUid: (state) => state.uid,
}
