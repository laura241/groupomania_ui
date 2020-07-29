<template>
  <div id="ShowAllMessages">
    <div class="card card-container">
      <AddNewPost @post-sent="updatePosts" />
      <table>
        <tr v-for="(p, i) in post" :key="p+i">
          <td>{{p.user.firstName}}</td>
          <td>{{p.user.lastName}}</td>
          <td>{{p.post}}</td>
          <td>{{p.createdAt}}</td>
          <td>{{p.comment}}</td>
          <AddNewComment v-bind:id="p.postId" />
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mainAxios } from "../../../http-common";
import AddNewComment from "./AddNewComment";
import AddNewPost from "./AddNewPost";
//import AllUsers from "../forum/AllUsers";
export default {
  name: "ShowAllPosts",
  data() {
    return {
      post: "",
    };
  },
  components: { AddNewComment, AddNewPost },
  mounted() {
    const token = localStorage.getItem("userToken");
    mainAxios
      .request({
        url: "/posts",
        method: "get",
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.post = response.data;
      })
      .catch((error) => console.error(error));
  },
  methods: {
    updatePosts() {
      const token = localStorage.getItem("userToken");
      mainAxios
        .request({
          url: "/posts",
          method: "get",
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          this.post = response.data;
          console.log(response);
        })
        .catch((error) => console.error(error));
    },
  },
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
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>