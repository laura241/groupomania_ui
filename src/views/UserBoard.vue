<template id="UserBoard">
  <b-container fluid>
    <div>
      <b-row>
        <b-col></b-col>
        <b-col cols="12">
          <ShowAllPosts />
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import ShowAllPosts from "@/components/forum/ShowAllPosts.vue";

import { mainAxios } from "../../http-common";

export default {
  name: "UserBoard",
  components: { ShowAllPosts },
  data() {
    return {
      role: [],
    };
  },
  mounted() {
    const userId = localStorage.getItem("userId");
    mainAxios
      .request({
        url: `/auth/users/${userId}`,
        method: "get",
      })
      .then((response) => {
        console.log(response);
        this.role = response.data.role;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped>
.card-container.card {
  max-width: 330px !important;
  padding: 12px 28px;
  text-align: left;
}
</style>
