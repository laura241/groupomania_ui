<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Bienvenue sur le réseau social de l'entreprise Groupama</h1>
    <p>
      <router-link to="/register">Créer un compte</router-link>|
      <router-link to="/login">Se connecter</router-link>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
