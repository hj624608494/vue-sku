import { flatten, isEqual } from './utils'
import Sku from './sku'

const install = function (Vue) {
  Vue.component('vue-sku', Sku)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  flatten,
  isEqual
}
