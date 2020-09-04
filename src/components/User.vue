<template>
  <div id="ShowAllMessages">
    <b-card title="Mon compte Groupomania">
      <b-row>
        <b-col>
          <ul>
            <li>
              <h6>Mon email</h6>
              {{ user.email }}
            </li>
            <br />
            <li>
              <h6>Mon nom</h6>
              {{ user.lastName }}
            </li>
            <br />
            <li>
              <h6>Mon prénom</h6>
              {{ user.firstName }}
            </li>
            <br />
            <li>
              <h6>Rôle</h6>
              {{ user.role }}
            </li>
          </ul>
        </b-col>
        <b-col>
          <img alt="Vue logo" src="../assets/logoUserAccount.jpg" />
        </b-col>
      </b-row>
      <b-button
        href="#"
        variant="primary"
        class="m-1"
        v-on:click="DeleteAccount"
      >Supprimer mon compte</b-button>
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
      showDismissibleAlert: false,
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
