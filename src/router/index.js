import Vue from "vue";
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import store from "../store";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/dashboard");
};


const routes = [{
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
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/register",
    component: Register,
    beforeEnter: ifNotAuthenticated
  },

  {
    path: "/dashboard",
    name: "userBoard",
    beforeEnter: ifAuthenticated,
    component: () => import("../views/UserBoard.vue"),
  },
  {
    path: "/dashboard/account",
    name: "userCount",
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
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;