import Vue from 'vue'
import DConfirm from './DConfirm'

// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
const ConfirmClass = Vue.extend(DConfirm)

const Confirm = option => {
  // Vue实例对象
  const ConfirmInstance = new ConfirmClass({
    el: document.createElement('div')
  })

  document.body.appendChild(ConfirmInstance.$el)
  ConfirmInstance.show = true
  document.body.style.overflow = 'hidden'
  ConfirmInstance.option = { ...ConfirmInstance.option, ...option }

  ConfirmInstance.ok = () => {
    typeof option.onOk === 'function' && option.onOk()
    ConfirmInstance.show = false
    document.body.style.overflow = ''
  }

  ConfirmInstance.close = () => {
    typeof option.onCancel === 'function' && option.onCancel()
    ConfirmInstance.show = false
    document.body.style.overflow = ''
  }
}

export default Confirm
