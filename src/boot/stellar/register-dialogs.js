import Vue from 'vue'
import StellarDialogSignIn from '../../components/dialogs/SignIn.vue'

export default ({ Vue }) => {
  Vue.component('stellar-dialog-signin', StellarDialogSignIn)
  Vue.mixin({
    methods: {
      openSignIn () {
        this.$store.dispatch('showSignIn')
      }
    }
  })
}