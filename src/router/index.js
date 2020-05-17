import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/Demo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
