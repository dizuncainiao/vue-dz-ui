import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ButtonTest',
    component: () => import(/* webpackChunkName: "demo" */ '../views/ButtonTest.vue')
  },
  {
    path: '/inputTest',
    name: 'InputTest',
    component: () => import(/* webpackChunkName: "demo" */ '../views/InputTest.vue')
  },
  {
    path: '/inputNumberTest',
    name: 'InputNumberTest',
    component: () => import(/* webpackChunkName: "demo" */ '../views/InputNumberTest.vue')
  },
  {
    path: '/checkboxTest',
    name: 'CheckboxTest',
    component: () => import(/* webpackChunkName: "demo" */ '../views/CheckboxTest.vue')
  },
  {
    path: '/radioTest',
    name: 'RadioTest',
    component: () => import(/* webpackChunkName: "demo" */ '../views/RadioTest.vue')
  },
  {
    path: '/selectTest',
    name: 'SelectTest',
    component: () => import(/* webpackChunkName: "demo" */ '../views/SelectTest.vue')
  },
  {
    path: '/messageTest',
    name: 'MessageTest',
    component: () => import(/* webpackChunkName: "demo" */ '../views/MessageTest.vue')
  },
  {
    path: '/confirmTest',
    name: 'ConfirmTest',
    component: () => import(/* webpackChunkName: "demo" */ '../views/ConfirmTest.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
