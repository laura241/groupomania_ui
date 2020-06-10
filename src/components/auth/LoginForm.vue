<template>
  <div>
    <h1>J'ai déjà un compte</h1>

    <form @submit.prevent="onSubmit">
      <p>
        <label for="email">Email</label>
        <input id="email" type="text" v-model="email" name="email" />
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
import Vue from "vue";
import VueSession from "vue-session";
Vue.use(VueSession);

export default {
  name: "LoginForm",
  data: function() {
    return {
      email: "",
      gpPassword: ""
    };
  },
  methods: {
    onSubmit() {
      const dataLogin = {
        email: this.email,
        gpPassword: this.gpPassword
      };
      http
        .post("/auth/login", dataLogin)
        .then(
          function(response) {
            if (response.status === 200 && "token" in response.body) {
              this.$session.start();
              this.$session.set("jwt", response.body.token);
              Vue.http.headers.common["Authorization"] =
                "Bearer" + response.body.token;
              this.$router.push("Home");
            }
          },
          function(err) {
            console.log("err", err);
          }
        )
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
