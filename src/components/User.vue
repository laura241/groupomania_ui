<template>
  <div id="ShowAllMessages">
    <p v-if="admin">
      <button v-on:click="ShowLastPosts">Afficher les dernières publications</button>
      {{lastPosts}}
    </p>
    <div class="card card-container">
      <h2>Mon compte Groupomania</h2>
      <ul>
        <li>Mon email:{{user.email}}</li>
        <li>Mon nom:{{user.lastName}}</li>
        <li>Mon prénom:{{user.firstName}}</li>
        <li>Rôle :{{user.role}}</li>
      </ul>
      <button v-on:click="DeleteAccount">Supprimer mon compte</button>
    </div>
  </div>
</template>

<script>
import { mainAxios } from "../../http-common";
import { AUTH_LOGOUT } from "../store/actions/auth";
export default {
  name: "User",
  data() {
    return {
      user: [],
      lastPosts: [],
      admin: "",
    };
  },
  mounted() {
    const userId = localStorage.getItem("userId");
    mainAxios
      .request({
        url: `/auth/users/${userId}`,
        method: "get",
      })
      .then((response) => {
        this.user = response.data;
        console.log(response);
        const role = response.data.role;
        if (role === "admin") {
          this.admin = true;
        } else {
          this.admin = false;
        }
        console.log(role);
      })
      .catch((error) => console.error(error));
  },
  methods: {
    DeleteAccount: function () {
      const userId = localStorage.getItem("userId");
      mainAxios
        .request({
          url: `/auth/users/${userId}`,
          method: "delete",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error));
      this.$nextTick(function () {
        this.$store
          .dispatch(AUTH_LOGOUT)
          .then(() => this.$router.push("/login"));
        this.$router.push("/login");
      });
    },
    ShowLastPosts: function () {
      const token = localStorage.getItem("userToken");
      mainAxios
        .request({
          url: "/posts/admin",
          method: "get",
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          this.lastPosts = response.data;
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style>
ul {
  padding-inline-start: 5px;
}
</style>



