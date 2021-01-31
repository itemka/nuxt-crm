export const actions = {
  async fetchCategories({ commit, dispatch }) {
    try {
      // TODO const uid = await dispatch('auth/getUserId')
      const uid = await this.$fire.auth.currentUser.uid
      const categories =
        (
          await this.$fire.database
            .ref(`/users/${uid}/categories`)
            .once('value')
        ).val() || {}

      return Object.keys(categories).map((key) => ({
        ...categories[key],
        id: key,
      }))
    } catch (error) {
      console.log(error) // TODO
      commit('setError', error)
      throw error
    }
  },
  async fetchCategoryById({ commit, dispatch }, id) {
    try {
      // TODO const uid = await dispatch('auth/getUserId')
      const uid = await this.$fire.auth.currentUser.uid
      const category =
        (
          await this.$fire.database
            .ref(`/users/${uid}/categories`)
            .child(id)
            .once('value')
        ).val() || {}

      return { ...category, id }
    } catch (error) {
      console.log(error) // TODO
      commit('setError', error)
      throw error
    }
  },
  async createCategory({ commit, dispatch }, { title, limit }) {
    try {
      // TODO const uid = await dispatch('auth/getUserId')
      const uid = await this.$fire.auth.currentUser.uid
      const { key = '' } = await this.$fire.database
        .ref(`/users/${uid}/categories`)
        .push({ title, limit })

      return {
        title,
        limit,
        id: key,
      }
    } catch (error) {
      console.log(error) // TODO
      commit('setError', error)
      throw error
    }
  },
  async updateCategory({ commit, dispatch }, { id, title, limit }) {
    try {
      // TODO const uid = await dispatch('auth/getUserId')
      const uid = await this.$fire.auth.currentUser.uid

      await this.$fire.database
        .ref(`/users/${uid}/categories`)
        .child(id)
        .update({ title, limit })
    } catch (error) {
      console.log(error) // TODO
      commit('setError', error)
      throw error
    }
  },
}
