<template>
  <div id="ShowAllMessages">
    <div>
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
import http from "../../../http-common";
export default {
  name: "ShowAllMessages",
  data() {
    return {
      message: []
    };
  },
  mounted() {
    const token = localStorage.getItem("userToken");
    http
      .request({
        url: "/messages",
        method: "get",
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        this.message = response.data;
        console.log(response);
      })
      .catch(error => console.error(error));
  }
};
</script>

<style>
</style>
