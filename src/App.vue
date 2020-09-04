<template>
  <b-container fluid>
    <div id="app">
      <MenuNav />
      <router-view />
    </div>
  </b-container>
</template>

<script>
import MenuNav from "./components/nav/MenuNav";

export default {
  name: "App",
  components: { MenuNav },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
