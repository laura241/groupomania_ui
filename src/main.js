import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import {
  BootstrapVue,
  IconsPlugin,
  EmbedPlugin,
  AvatarPlugin
} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Embed from 'v-video-embed';
import moment from 'moment'







Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(AvatarPlugin)
Vue.use(EmbedPlugin)
Vue.use(Embed)
Vue.use(moment)





new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});