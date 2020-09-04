<template>
  <b-container fluid>
    <div>
      <SignupForm />
    </div>
  </b-container>
</template>

<script>
import SignupForm from "@/components/auth/SignupForm.vue";
export default {
  components: { SignupForm },
};
</script>
