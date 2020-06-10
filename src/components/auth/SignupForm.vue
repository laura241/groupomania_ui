<template>
  <div class="SignupForm">
    <h1>Je crée mon compte</h1>
    <form @submit.prevent="onSubmit">
      <p>
        <label for="lastName">Nom</label>
        <input id="lastName" type="text" v-model="lastName" name="lastName" />
      </p>

      <p>
        <label for="firstName">Prénom</label>
        <input id="firstName" type="text" v-model="firstName" name="firstName" />
      </p>

      <p>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" name="email" />
      </p>

      <p>
        <label for="gpPassword">Mot de passe</label>
        <input id="gpPassword" type="text" v-model="gpPassword" name="gpPassword" />
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
      lastName: "",
      firstName: "",
      email: "",
      gpPassword: ""
    };
  },
  methods: {
    onSubmit() {
      const data = {
        lastName: this.lastName,
        firstName: this.firstName,
        email: this.email,
        gpPassword: this.gpPassword
      };
      http
        .post("/auth/signup", data)
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      this.$router.push("Home");
    }
  }
};
</script>
