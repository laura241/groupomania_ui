<template>
  <div id="ShowAllMessages">
    <b-card title="Mon compte Groupomania">
      <b-card-text>
        <h6>Mon email</h6>
        <div>{{ user.email }}</div>
        <h6>Mon nom</h6>
        <div>{{ user.lastName }}</div>
        <h6>Mon prénom</h6>
        <div>{{ user.firstName }}</div>
        <h6>Rôle</h6>
        <div>{{ user.role }}</div>

        <button v-on:click="DeleteAccount">Supprimer mon compte</button>
      </b-card-text>
    </b-card>
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
  },
};
</script>

<style>
ul {
  padding-inline-start: 5px;
}
</style>
