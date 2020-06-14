<template>
  <div id="LoginForm" class="col-md-12">
    <div class="card card-container">
      <h1>J'ai déjà un compte</h1>

      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="text" v-model="email" name="email" />
        </div>

        <div class="form-group">
          <label for="gpPassword">Mot de passe</label>
          <input id="gpPassword" type="text" required v-model="gpPassword" name="gpPassword" />
        </div>

        <div class="form-group">
          <input type="submit" required value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { AUTH_REQUEST } from "../../store/actions/auth";

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
      const { email, gpPassword } = this;
      this.$store.dispatch(AUTH_REQUEST, { email, gpPassword }).then(() => {
        this.$router.push("/dashboard");
      });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
