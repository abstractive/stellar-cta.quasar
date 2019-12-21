import StellarPageLanding from '../../components/pages/Landing.vue'

import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default ({ Vue }) => {
  Vue.component('stellar-page-landing', StellarPageLanding)
  Vue.mixin({
    methods: {
      scrollToElement(el, offsetY = 50) {
        el = document.getElementById(el)
        let container = document.getElementsByClassName('q-page-container')[0]
        const target = getScrollTarget(container)
        const offset = el.offsetParent.offsetTop - offsetY
        const duration = 300
        //de console.log([el, container, target, offset, offsetY])
        setScrollPosition(target, offset, duration)
      }
    }
  })
}
