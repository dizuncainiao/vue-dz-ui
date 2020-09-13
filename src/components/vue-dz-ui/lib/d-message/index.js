import Vue from 'vue'
import DMessage from './DMessage'

// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
const MessageClass = Vue.extend(DMessage)

const showHandler = option => {
  // Vue实例对象
  const MessageInstance = new MessageClass({
    el: document.createElement('div')
  })

  document.body.appendChild(MessageInstance.$el)
  MessageInstance.option = { ...MessageInstance.option, ...option }
  MessageInstance.show = true
  setTimeout(() => {
    MessageInstance.backTop = true
  }, 300)

  // 定义几秒后消失
  setTimeout(() => {
    MessageInstance.backTop = false
    MessageInstance.show = false
  }, option.duration || MessageInstance.option.duration)
}

// option 对象式调用
const Message = showHandler;

// 函数式调用
['success', 'warning', 'error'].forEach(type => {
  Message[type] = (msg, duration) => {
    const option = {
      msg: msg,
      type: type,
      duration: duration || 3000
    }
    showHandler(option)
  }
})

export default Message
