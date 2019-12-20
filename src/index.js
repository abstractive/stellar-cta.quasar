module.exports = function (api) {
  conf.boot.push('~quasar-app-extension-stellar-forms/src/boot/i18n.js')
  conf.boot.push('~quasar-app-extension-stellar-forms/src/boot/vuelidate.js')
  conf.boot.push('~quasar-app-extension-stellar-forms/src/boot/vuelidate-mixins.js')
  conf.boot.push('~quasar-app-extension-stellar-forms/src/boot/register-forms.js')
  conf.build.transpileDependencies.push(/quasar-app-extension-stellar-forms[\\/]src/)
}
