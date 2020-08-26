<template>
  <div id="Navigation">
    <b-nav pills>
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        text="Mon compte"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item>
          <router-link to="/register">Créer un compte</router-link>
        </b-dropdown-item>

        <b-dropdown-item>
          <router-link to="/login">Se connecter</router-link>
        </b-dropdown-item>

        <b-dropdown-item>
          <router-link to="/dashboard/account">Mes informations</router-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item>
        <router-link to="/dashboard">Accueil</router-link>
      </b-nav-item>

      <b-nav-item>
        <router-link to="/dashboard/admin">Admin</router-link>
      </b-nav-item>

      <div id="logout">
        <button v-on:click="logout">Se déconnecter</button>
      </div>
    </b-nav>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "../../store/actions/auth";
export default {
  name: "menu",
  methods: {
    logout: function () {
      this.$store
        .dispatch(AUTH_LOGOUT)
        .then(() => this.$router.push("/login").catch(() => {}));
    },
  },
};
</script>
