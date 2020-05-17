import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDzUi from 'vue-dz-ui'

Vue.use(VueDzUi)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
