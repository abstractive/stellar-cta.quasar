export default {
  state: {
    showSignIn: false
  },
  mutations: {
    showSignIn(state) {
      state.showSignIn = true
    },
    hideSignIn(state) {
      state.showSignIn = false
    }
  },
  actions: {
    showSignIn(context) {
      context.commit('showSignIn')
    },
    hideSignIn(context) {
      context.commit('hideSignIn')
    }
  },
  getters: {
    showSignIn(state) {
      return state.showSignIn
    }
  }
}
