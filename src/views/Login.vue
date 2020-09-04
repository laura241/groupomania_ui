<template>
  <b-container fluid>
    <div>
      <LoginForm />
    </div>
  </b-container>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";
export default {
  components: { LoginForm },
};
</script>
