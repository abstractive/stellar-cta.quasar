export default {
  state: {
    showDrawer: true,
    fullDrawer: false
  },
  mutations: {
    toggleDrawer(state) {
      if (!(state.showDrawer = !state.showDrawer)) {
        state.fullDrawer = false
      }
    },
    hideDrawer(state) {
      state.showDrawer = false
    },
    showDrawer(state) {
      state.showDrawer = true
    },
    miniDrawer(state) {
      state.fullDrawer = false
    },
    fullDrawer(state) {
      state.fullDrawer = true
    }
  },
  actions: {
    toggleDrawer(context) {
      context.commit('toggleDrawer')
    },
    hideDrawer(context) {
      context.commit('hideDrawer')
    },
    showDrawer(context) {
      context.commit('showDrawer')
    },
    miniDrawer(context) {
      context.commit('miniDrawer')
    },
    fullDrawer(context) {
      context.commit('fullDrawer')
    }
  },
  getters: {
    showDrawer(state) {
      return state.showDrawer
    },
    fullDrawer(state) {
      return state.fullDrawer
    }
  }
}
