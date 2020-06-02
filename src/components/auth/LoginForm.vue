<template>
  <div>
    <h1>J'ai déjà un compte</h1>

    <form>
      <p>
        <label for="login">Login</label>
        <input id="login" type="text" v-model="login" name="login" />
      </p>

      <p>
        <label for="gp_password">Mot de passe</label>
        <input id="gp_password" type="text" v-model="gp_password" name="gp_password" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: function() {
    return {
      login: null,
      bp_password: null
    };
  }
};
</script>