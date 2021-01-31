export const actions = {
  async createRecord({ dispatch, commit }, record) {
    try {
      // TODO const uid = await dispatch('auth/getUserId')
      const uid = await this.$fire.auth.currentUser.uid

      return await this.$fire.database.ref(`/users/${uid}/records`).push(record)
    } catch (error) {
      console.log('error', error)
      commit('setError', error)
      throw error
    }
  },
  async fetchRecords({ dispatch, commit }) {
    try {
      // TODO const uid = await dispatch('auth/getUserId')
      const uid = await this.$fire.auth.currentUser.uid
      const records =
        (
          await this.$fire.database.ref(`/users/${uid}/records`).once('value')
        ).val() || {}

      return Object.keys(records).map((key) => ({
        ...records[key],
        id: key,
      }))
    } catch (error) {
      console.log('error', error)
      commit('setError', error)
      throw error
    }
  },
  async fetchRecordById({ dispatch, commit }, id) {
    try {
      // TODO const uid = await dispatch('auth/getUserId')
      const uid = await this.$fire.auth.currentUser.uid
      const record =
        (
          await this.$fire.database
            .ref(`/users/${uid}/records`)
            .child(id)
            .once('value')
        ).val() || {}

      return { ...record, id }
    } catch (error) {
      console.log('error', error)
      commit('setError', error)
      throw error
    }
  },
}
