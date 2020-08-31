<template>
  <div class="card card-container" id="AllPosts">
    <div>
      <div>
        <div class="card card-container">
          <table>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Titre post</th>
              <th>Post</th>
              <th>Lien</th>
              <th>Date de création</th>
            </tr>
            <tr v-for="(p, i) in posts" :key="p + i">
              <td>{{ p.user.firstName }}</td>
              <td>{{ p.user.lastName }}</td>
              <td>{{p.title}}</td>
              <td>{{p.post}}</td>
              <td>{{p.link}}</td>
              <td>{{p.createdAt}}</td>
              <td>
                <ValidationButton v-bind:id="p.postId" />
                <DeleteButton v-bind:id="p.postId" />
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ValidationButton from "./ValidationButton";
import DeleteButton from "./DeleteButton";
import moment from "moment";
export default {
  name: "AdminPAge",
  components: { ValidationButton, DeleteButton },
  filters: {
    moment: function (date) {
      return moment(date).format("DD MM YYYY, h:mm a");
    },
  },
  data() {
    return {
      posts: "",
    };
  },
  mounted() {
    const token = localStorage.getItem("userToken");
    axios
      .get("http://localhost:3000/api/posts/admin", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.posts = response.data;
        console.log(this.posts);
      })
      .catch((error) => console.error(error));
  },
};
</script>
