
<template>
  <div>
    <SignupForm />
    <LoginForm />
  </div>
</template>

<script>
import SignupForm from "@/components/auth/SignupForm.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
export default {
  components: { SignupForm, LoginForm }
};
</script>