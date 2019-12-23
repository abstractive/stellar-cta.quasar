function extendConf(conf) {
  conf.extras.push('fontawesome-v5')
  conf.framework.iconSet = 'fontawesome-v5'
  conf.framework.plugins.push('Notify')
  conf.framework.plugins.push('Dialog')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/i18n.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/axios.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/lodash.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/vuelidate.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/stellar/mixins-quasar.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/stellar/mixins-vuelidate.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/stellar/register-store.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/stellar/register-forms.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/stellar/register-drawers.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/stellar/register-dialogs.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/stellar/register-toolbars.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/stellar/register-elements.js')
  conf.boot.push('~quasar-app-extension-stellar/src/boot/stellar/register-pages.js')
  conf.build.transpileDependencies.push(/quasar-app-extension-stellar[\\/]src/)
}

module.exports = function (api) {
  api.extendQuasarConf(extendConf)
}