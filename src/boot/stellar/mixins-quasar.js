import { openURL } from 'quasar'

export default ({ Vue, app }) => {
  Vue.mixin({
    methods: {
      openURL,
      openLink (url) {
        if (url.startsWith("http")) {
          this.openURL(url)
        } else {
          this.$router.push(url)
        }
      }
    }
  })
}
