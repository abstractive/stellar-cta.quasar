import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '../i18n'

Vue.use(VueI18n)
console.log(messages)
export default ({ app }) => {
  if (typeof app.i18n === 'undefined') {
    console.warn("no i18n")
    app.i18n = new VueI18n({
      locale: 'en-us',
      fallbackLocale: 'en-us',
      messages
    })
  } else {
    console.info("has i18n")
    app.i18n.mergeLocaleMessage({
      locale: 'en-us',
      messages
    })
  }
}