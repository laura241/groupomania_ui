<template>
  <div id="UserAdmin">
    <h1>Administration</h1>
    <AllUsers />
    <AdminPage />
  </div>
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
