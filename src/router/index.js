import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta: {
      guest: true
    }
  },

  {
    path: '/dashboard',
    name: 'userBoard',
    component: () => import('../views/UserBoard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/account',
    name: 'userCount',
    component: () => import('../views/UserAccount.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/admin',
    name: 'admin',
    component: () => import('../views/UserAdmin.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/forum',
    name: 'Forum',
    component: () => import('../views/Forum.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({
            name: 'userboard'
          })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({
        name: 'userboard'
      })
    }
  } else {
    next()
  }
})

export default router