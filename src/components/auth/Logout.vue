<template>
  <div id="logout">
    <button v-on:click="logout">Se déconnecter></button>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "../../store/actions/auth";
export default {
  name: "Logout",
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>
