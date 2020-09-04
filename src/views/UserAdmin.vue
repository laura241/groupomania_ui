<template>
  <b-container>
    <div id="UserAdmin">
      <h1>Administration</h1>
      <AdminPage />
    </div>
  </b-container>
</template>

<script>
import AdminPage from "../../src/components/admin/AdminPage";
export default {
  name: "UserAdmin",
  components: {
    AdminPage,
  },
};
</script>
