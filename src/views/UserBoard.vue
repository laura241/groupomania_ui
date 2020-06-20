<template>
  <p>
    <router-link to="/dashboard/forum">Forum</router-link>|
    <router-link to="/dashboard/account">Mon compte</router-link>

    <Logout />
  </p>
</template>

<script>
import Logout from "@/components/auth/Logout.vue";
export default {
  components: { Logout }
};
</script>