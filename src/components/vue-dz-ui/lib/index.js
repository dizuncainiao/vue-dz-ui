'use strict'

import DButton from './d-button/DButton'
import DCheckbox from './d-checkbox/DCheckbox'
import DForm from './d-form/DForm'
import DInput from './d-input/DInput'
import DInputNumber from './d-input-number/DInputNumber'
import DRadio from './d-radio/DRadio'
import DSection from './d-section/DSection.vue'
import DSelect from './d-select/DSelect'
import DMessage from './d-message'
import DConfirm from './d-confirm'

const components = [DButton, DCheckbox, DForm, DInput, DInputNumber, DRadio, DSection, DSelect]

const install = function install (Vue) {
  components.forEach(component => Vue.component(component.name, component))
  Vue.prototype.$message = DMessage
  Vue.prototype.$confirm = DConfirm
}

/* if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
} */

export default install
