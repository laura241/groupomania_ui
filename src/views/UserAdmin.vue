<template>
  <div id="UserAdmin">
    <h1>Administration</h1>
    <AllUsers />
    <AdminPage />
  </div>
</template>

<script>
import AdminPage from "../../src/components/admin/AdminPage";
import AllUsers from "../../src/components/admin/AllUsers";
export default {
  name: "UserAdmin",
  components: {
    AdminPage,
    AllUsers,
  },
};
</script>
