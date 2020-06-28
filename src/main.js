import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const token = localStorage.getItem('userToken')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}