import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '../i18n'
const merge = require('deepmerge')
Vue.use(VueI18n)

export default ({ app }) => {
  if (typeof app.i18n === 'undefined') {
    app.i18n = new VueI18n({
      locale: 'en-us',
      fallbackLocale: 'en-us',
      messages
    })
  } else {
    let existing = { 'en-us': app.i18n.messages['en-us'] }
    //de Hard reset, since app.i18n.mergeLocaleMessage seems to fail.
    //de But allow application to override extension messages.
    app.i18n = new VueI18n({
      locale: 'en-us',
      fallbackLocale: 'en-us',
      messages: merge(messages, existing)
    })
  }
}
