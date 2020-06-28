<template>
  <div>
    <div class="User">
      <h1>Bienvenue sur votre compte</h1>
    </div>
  </div>
</template>

<script>
import { getters } from "../store";
export default {
  data: function() {
    return {
      user: this.firstName
    };
  },
  computed: {
    ...getters({
      firstName: "firstName"
    })
  }
};
</script>