import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/UserAccount.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../views/Forum.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router