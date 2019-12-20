function extendConf(conf) {
  conf.extras.push('fontawesome-v5')
  conf.framework.iconSet = 'fontawesome-v5'
  conf.framework.plugins.push('Notify')
  conf.framework.plugins.push('Dialog')
  conf.boot.push('~quasar-app-extension-stellar-forms/src/boot/i18n.js')
  conf.boot.push('~quasar-app-extension-stellar-forms/src/boot/lodash.js')
  conf.boot.push('~quasar-app-extension-stellar-forms/src/boot/vuelidate.js')
  conf.boot.push('~quasar-app-extension-stellar-forms/src/boot/vuelidate-mixins.js')
  conf.boot.push('~quasar-app-extension-stellar-forms/src/boot/register-forms.js')
  conf.build.transpileDependencies.push(/quasar-app-extension-stellar-forms[\\/]src/)
}
module.exports = function (api) {
  api.extendQuasarConf(extendConf)
}