export const state = () => ({
  users: [],
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const users = await this.$axios.$get(`${process.env.API_URL}/users`)

      commit('setUsers', users)
    } catch (error) {
      console.log(error)
      throw err
    }
  },
}

export const getters = {
  getUsers: (state) => state.users,
}
