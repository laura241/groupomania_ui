<template>
  <div id="ShowAllMessages">
    <div class="card card-container">
      <table>
        <tr v-for="(m, i) in message" :key="m+i">
          <td>{{m.lastName}}</td>
          <td>{{m.message}}</td>
          <td>{{m.createdAt}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mainAxios } from "../../../http-common";

//import AllUsers from "../forum/AllUsers";
export default {
  name: "ShowAllMessages",
  //components: { AllUsers },

  data() {
    return {
      message: []
    };
  },
  mounted() {
    const token = localStorage.getItem("userToken");
    mainAxios
      .request({
        url: "/messages",
        method: "get",
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        this.message = response.data;
        this.props = response.data.userId;
        console.log(response);
      })
      .catch(error => console.error(error));
  }
};
</script>

<style>
.card-container.card {
  padding: 40px 40px;
}
.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>