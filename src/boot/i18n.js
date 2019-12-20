import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  if (typeof app.i18n === 'undefined') {
    app.i18n = new VueI18n({
      locale: 'en-us',
      fallbackLocale: 'en-us',
      messages
    })
  } else {
    app.i18n.mergeLocaleMessage({
      locale: 'en-us',
      messages
    })
  }
}