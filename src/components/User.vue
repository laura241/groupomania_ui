<template>
  <div id="ShowAllMessages">
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
      user: []
    };
  },
  mounted() {
    const userId = localStorage.getItem("userId");
    mainAxios
      .request({
        url: `/auth/users/${userId}`,
        method: "get"
      })
      .then(response => {
        this.user = response.data;
        console.log(response);
      })
      .catch(error => console.error(error));
  },
  methods: {
    DeleteAccount: function() {
      const userId = localStorage.getItem("userId");
      mainAxios
        .request({
          url: `/auth/users/${userId}`,
          method: "delete"
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => console.error(error));
      this.$nextTick(function() {
        this.$store
          .dispatch(AUTH_LOGOUT)
          .then(() => this.$router.push("/login"));
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
ul {
  padding-inline-start: 5px;
}
</style>



