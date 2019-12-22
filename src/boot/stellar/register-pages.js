import StellarPageLanding from '../../components/pages/Landing.vue'

import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default ({ Vue }) => {
  Vue.component('stellar-page-landing', StellarPageLanding)
  Vue.mixin({
    methods: {
      scrollToElement (el, offsetY = 50) {
        el = document.getElementById(el)
        const container = document.getElementsByClassName('q-page-container')[0]
        const target = getScrollTarget(container)
        const offset = el.offsetParent.offsetTop - offsetY
        const duration = 300
        setScrollPosition(target, offset, duration)
      },
      scrollOnePage () {
        const container = document.getElementsByClassName('q-page-container')[0]
        const target = getScrollTarget(container)
        const duration = 300
        setScrollPosition(target, target.innerHeight, duration)
      }
    }
  })
}
