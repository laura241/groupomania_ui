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
    },
    {
      path: "/dashboard/admin",
      name: "admin",
      beforeEnter: ifAuthenticated,
      component: () => import("../views/UserAdmin.vue"),
    },
    {
      path: "/dashboard/forum",
      name: "Forum",
      beforeEnter: ifAuthenticated,
      component: () => import("../views/Forum.vue"),
    },
    {
      path: '/a',
      name: "Reddit",
      component: () => {
        window.location = "https://www.reddit.com/api/v1/authorize?client_id=51U71a7A1LknxA&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:8080/dashboard/forum&duration=permanent&scope=privatemessages identity"
      }
    }
  ]
})