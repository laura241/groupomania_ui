import Vue from "vue";
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import store from "../store";



Vue.use(Router);


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/dashboard')
}

const isAdmin = (to, from, next) => {
  if (localStorage.getItem('role') === 'admin') {
    next()
    return
  }
  next('/dashboard')
}




export default new Router({
  mode: 'history',
  routes: [{
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: '/home',
      component: Home
    }, {
      path: "/login",
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: "/register",
      component: Register,
      beforeEnter: ifNotAuthenticated,
    },

    {
      path: "/dashboard",
      name: "userBoard",
      beforeEnter: ifAuthenticated,
      component: () => import("../views/UserBoard.vue"),
    },
    {
      path: "/dashboard/account",
      name: "userAccount",
      beforeEnter: ifAuthenticated,
      component: () => import("../views/UserAccount.vue")
    }, {
      path: "/dashboard/admin",
      name: 'userAdmin',
      beforeEnter: isAdmin,
      component: () => import("../views/UserAdmin")
    },
    {
      path: '/b-link',
      name: "ShareArticle",
      component: () => {
        window.location = `p.link`
      }
    },
  ]
})