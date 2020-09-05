import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import {
  BootstrapVue,
  IconsPlugin,
  EmbedPlugin,
  AvatarPlugin,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(AvatarPlugin);
Vue.use(EmbedPlugin);

Vue.use(require("vue-moment"));
Vue.config.productionTip = false;


new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});