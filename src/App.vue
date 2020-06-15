<template>
  <div id="app">
    <div class="nav main-container">
      <router-view />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { USER_REQUEST } from "./store/actions/user";
import { AUTH_LOGOUT } from "./store/actions/auth";

export default {
  name: "App",
  created: function() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  },
  function() {
    axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.status === 401 && err.config && !err.config._isRetryRequest) {
          this.$store.dispatch(AUTH_LOGOUT);
        }
      });
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
