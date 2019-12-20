import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '../i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  if (typeof app.i18n === 'undefined') {
    app.i18n = new VueI18n({
      locale: 'en-us',
      fallbackLocale: 'en-us',
      messages
    })
  } else {
    _.assign(app.i18n.messages['en-us'], app.i18n.messages['en-us'], messages['en-us'])
    /*
    app.i18n.mergeLocaleMessage({
      locale: 'en-us',
      messages
    })
    */
  }
  console.info(["forms: i18n after", app.i18n])
}
