<template>
  <div id="ShowAllMessages">
    <div class="card card-container">
      <table>
        <tr v-for="(u, i) in user" :key="u+i">
          <td>{{u.lastName}}</td>
          <td>{{u.firstName}}</td>
          <td>{{u.email}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      user: []
    };
  },
  mounted() {
    const userId = localStorage.getItem("user_Id");
    const token = localStorage.getItem("userToken");
    axios
      .request({
        url: "/auth/" + userId,
        data: {
          userId: userId
        },
        method: "get",
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        this.user = response.data;
        console.log(response);
      })
      .catch(error => console.error(error));
  }
};
</script>