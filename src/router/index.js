import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newCompo',
    name: 'NewCompo',
    component: () => import('../views/newCompo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
