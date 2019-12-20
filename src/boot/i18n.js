import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '../i18n'

Vue.use(VueI18n)
console.log(['forms', messages])
export default ({ app }) => {
  if (typeof app.i18n === 'undefined') {
    console.warn("forms: no i18n")
    app.i18n = new VueI18n({
      locale: 'en-us',
      fallbackLocale: 'en-us',
      messages
    })
  } else {
    console.info("forms: has i18n")
    app.i18n.mergeLocaleMessage({
      locale: 'en-us',
      messages
    })
  }
  console.info(["forms: i18n", app.i18n])
}