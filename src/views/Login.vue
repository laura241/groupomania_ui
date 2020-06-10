
<template>
  <div>
    <SignupForm />
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";
export default {
  components: { LoginForm }
};
</script>