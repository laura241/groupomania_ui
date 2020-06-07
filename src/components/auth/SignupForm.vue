<template>
  <div class="SignupForm">
    <h1>Je crée mon compte</h1>
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <p>
        <label for="last_name">Nom</label>
        <input
          id="last_name"
          type="text"
          v-model="last_name"
          name="last_name"
        />
      </p>

      <p>
        <label for="first_name">Prénom</label>
        <input
          id="first_name"
          type="text"
          v-model="first_name"
          name="first_name"
        />
      </p>

      <p>
        <label for="gp_service">Service</label>
        <input
          id="gp_service"
          type="text"
          v-model="gp_service"
          name="gp_service"
        />
      </p>

      <p>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" name="email" />
      </p>

      <p>
        <label for="gp_login">Login</label>
        <input id="gp_login" type="text" v-model="gp_login" name="gp_login" />
      </p>

      <p>
        <label for="gp_password">Mot de passe</label>
        <input
          id="gp_password"
          type="text"
          v-model="gp_password"
          name="gp_password"
        />
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
import http from "../../../http-common";

export default {
  name: "SignupForm",
  data: function() {
    return {
      last_name: "",
      first_name: "",
      gp_service: "",
      email: "",
      gp_login: "",
      gp_password: "",
    };
  },
  methods: {
    onSubmit() {
      const data = {
        last_name: this.last_name,
        first_name: this.first_name,
        gp_service: this.gp_service,
        email: this.email,
        gp_login: this.gp_login,
        gp_password: this.gp_password,
      };
      http
        .post("/auth/signup", data)
        .then((response) => {
          this.$router.push("Home");
          this.users = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
