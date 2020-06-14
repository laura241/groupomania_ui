<template>
  <div id="SignupForm" class="col-md-12">
    <div class="card card-container">
      <h1>Je crée mon compte</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="lastName">Nom</label>
          <input
            id="lastName"
            type="text"
            v-validate="'required|min:2|max:30'"
            v-model="lastName"
            name="lastName"
          />
        </div>

        <div class="form-group">
          <label for="firstName">Prénom</label>
          <input
            id="firstName"
            type="text"
            v-validate="'required|min:2|max:30'"
            v-model="firstName"
            name="firstName"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            v-validate="'required|email|max:50'"
            v-model="email"
            name="email"
          />
        </div>

        <div class="form-group">
          <label for="gpPassword">Mot de passe</label>
          <input
            id="gpPassword"
            type="password"
            v-validate="'required|min:6|max:40'"
            v-model="gpPassword"
            name="gpPassword"
          />
        </div>

        <div class="form-group">
          <label for="passwordConfirm">Confirmez votre mot de passe</label>
          <input
            id="passwordConfirm"
            type="password"
            v-validate="'required|min:6|max:40'"
            v-model="passwordConfirm"
          />
        </div>

        <div class="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
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
      gpPassword: "",
      passwordConfirm: ""
    };
  },
  methods: {
    onSubmit(e) {
      const data = {
        lastName: this.lastName,
        firstName: this.firstName,
        email: this.email,
        gpPassword: this.gpPassword
      };

      e.preventDefault();
      if (
        this.gpPassword === this.passwordConfirm &&
        this.gpPassword.length > 0
      ) {
        http
          .post("/auth/signup", data)
          .then(
            response => response.user,
            http
              .post("/auth/login", {
                email: this.email,
                gpPassword: this.gpPassword
              })
              .then(response => {
                const token = response.token;
                const userId = JSON.stringify(response.userId);
                localStorage.setItem("userId", userId),
                  localStorage.setItem("jwt", token),
                  this.$router.push("/dashboard");
              })
          )
          .catch(error => {
            localStorage.removeItem("userId", "jwt");
            {
              error;
            }
          });
      }
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
