import Vue from 'vue'
import Vuex from 'vuex'

import drawer from '../../store/drawer'
import signin from '../../store/signin'

Vue.use(Vuex)

export default ({ Vue, app }) => {
  if (typeof(app.store) === 'undefined') {
    app.store = new Vuex.Store({})
  }
  app.store.registerModule('drawer', drawer)
  app.store.registerModule('signin', signin)
}
