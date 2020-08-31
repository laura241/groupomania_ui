<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-nav href="#">
        <b-nav-item>
          <img alt="groupomania" src="../../assets/logoMenu.png" />
          <router-link to="/dashboard">Accueil</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link to="/dashboard/admin">Admin</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link to="/register">Créer un compte</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav-item-dropdown text="Mon compte">
          <b-dropdown-item href="#">
            <router-link to="/login">Se connecter</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#">
            <router-link to="/dashboard/account">Mes informations</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <div id="logout">
          <b-button v-on:click="logout">Se déconnecter</b-button>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "../../store/actions/auth";
export default {
  name: "menu",
  methods: {
    logout: function() {
      this.$store
        .dispatch(AUTH_LOGOUT)
        .then(() => this.$router.push("/login").catch(() => {}));
    },
  },
};
</script>

<style>
a {
  color: white;
}

li {
  list-style: none;
  margin-left: 0;
  text-align: left;
}

.bg-info {
  background-color: #d24b67;
}
</style>
