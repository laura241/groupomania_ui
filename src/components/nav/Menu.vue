<template>
  <div>
    <div>
      <router-link to="/register">Créer un compte</router-link>|
      <router-link to="/login">Se connecter</router-link>|
    </div>
    <div>
      <router-link to="/dashboard/forum">Forum</router-link>|
      <router-link to="/dashboard/account">{{name}}Mon compte</router-link>
    </div>
    <div id="logout">
      <button v-on:click="logout">Se déconnecter></button>
    </div>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "../../store/actions/auth";
export default {
  name: "menu",
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
      this.$router.push("/login");
    }
  }
};
</script>