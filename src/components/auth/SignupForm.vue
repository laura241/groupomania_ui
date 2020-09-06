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
            v-model="lastName"
            name="lastName"
            placeholder="Nom"
            aria-label="Nom"
          />
        </div>

        <div class="form-group">
          <label for="firstName">Prénom</label>
          <input
            id="firstName"
            type="text"
            v-model="firstName"
            name="firstName"
            placeholder="Prénom"
            aria-label="Prénom"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
          />
        </div>

        <div class="form-group">
          <label for="gpPassword">Mot de passe</label>
          <input
            id="gpPassword"
            placeholder="Mot de passe"
            aria-label="Mot de passe"
            type="password"
            v-model="gpPassword"
            name="gpPassword"
          />
          <b-form-text
            id="password-help-block"
            aria-describedy="Votre mot de passe doit contenir 6 caractères au minimum"
          >Votre mot de passe doit contenir 6 caractères au minimum</b-form-text>
        </div>

        <div class="form-group">
          <label for="passwordConfirm">Confirmez votre mot de passe</label>

          <input
            id="passwordConfirm"
            type="password"
            aria-describedy="Votre mot de passe doit contenir 6 caractères au minimum"
            v-model="passwordConfirm"
          />
        </div>

        <div class="form-group">
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mainAxios } from "../../../http-common";
import { AUTH_REQUEST } from "../../store/actions/auth";
export default {
  name: "SignupForm",
  data: function () {
    return {
      lastName: "",
      firstName: "",
      email: "",
      gpPassword: "",
      passwordConfirm: "",
    };
  },
  methods: {
    onSubmit(e) {
      const data = {
        lastName: this.lastName,
        firstName: this.firstName,
        email: this.email,
        gpPassword: this.gpPassword,
      };
      e.preventDefault();
      if (
        this.gpPassword === this.passwordConfirm &&
        this.gpPassword.length > 0
      ) {
        mainAxios
          .post("/auth/signup", data)
          .then(() => {
            const { email, gpPassword } = this;
            this.$store
              .dispatch(AUTH_REQUEST, { email, gpPassword })
              .then(() => {
                this.$router.push("/dashboard");
              });
          })
          .catch((error) => {
            localStorage.removeItem("token");
            {
              error;
            }
          });
      }
    },
  },
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
