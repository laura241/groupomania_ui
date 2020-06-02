<template>
  <div class="SignupForm">
    <h1>Je crée mon compte</h1>
    <form @submit="checkform" action="http://localhost:8080/home" method="post">
      <p>
        <label for="last_name">Nom</label>
        <input id="last_name" type="text" v-model="last_name" name="last_name" />
      </p>

      <p>
        <label for="first_name">Prénom</label>
        <input id="first_name" type="text" v-model="first_name" name="first_name" />
      </p>

      <p>
        <label for="service">Service</label>
        <input id="service" type="text" v-model="service" name="service" />
      </p>

      <p>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" name="email" />
      </p>

      <p>
        <label for="login">Login</label>
        <input id="login" type="text" v-model="login" name="login" />
      </p>

      <p>
        <label for="gp_password">Mot de passe</label>
        <input id="gp_password" type="text" v-model="gp_password" name="gp_password" />
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  data: function() {
    return {
      errors: [],
      last_name: null,
      first_name: null,
      service: null,
      email: null,
      login: null,
      bp_password: null
    };
  },
  methods: {
    checkForm: function(e) {
      if (
        this.last_name &&
        this.first_name &&
        this.service &&
        this.email &&
        this.login &&
        this.bp_password
      ) {
        return true;
      }
      e.preventDefault();
    }
  }
};
</script>
