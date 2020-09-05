<template>
  <div fluid>
    <div id="AdminPage">
      <b-row>
        <b-tabs content-class="mt-4" fill>
          <b-tab title="Gestion des utilisateurs">
            <p>
              <AllUsers />
            </p>
          </b-tab>
          <b-tab title="Gestion des posts">
            <p>
              <AllPosts />
            </p>
          </b-tab>
          <b-tab title="Gestion des commentaires">
            <p>
              <AllComments />
            </p>
          </b-tab>
        </b-tabs>
      </b-row>
    </div>
  </div>
</template>

<script>
import AllUsers from "../admin/AllUsers";
import axios from "axios";
import moment from "moment";
import AllPosts from "../admin/AllPosts";
import AllComments from "../admin/AllComments";

export default {
  name: "AdminPage",
  components: { AllPosts, AllUsers, AllComments },
  filters: {
    moment: function (date) {
      return moment(date).format("DD MM YYYY, h:mm a");
    },
  },
  data() {
    return {
      posts: "",
      comments: "",
    };
  },
  methods: {
    onSubmit() {
      const token = window.localStorage.getItem("userToken");
      axios
        .get("http://localhost:3000/api/comments/admin", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          this.comments = response.data;
          console.log(response);
        });
    },

    getAdminPosts() {
      const token = localStorage.getItem("userToken");
      axios
        .get(
          "http://localhost:3000/api/posts/admin",

          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          this.posts = response.data;
          console.log(this.posts);
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
