<template>
  <div id="AllComments">
    <div>
      <div>
        <div class="card card-container">
          <table>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Commentaire</th>
              <th>Id post</th>
              <th>Date de création</th>
            </tr>
            <tr v-for="(c, i) in comments" :key="c + i">
              <td>{{c.user.lastName}}</td>
              <td>{{c.user.firstName}}</td>
              <td>{{c.comment}}</td>
              <td>{{c.postId}}</td>
              <td>{{c.createdAt}}</td>
              <td>
                <ValidationButtonComment v-bind:commentId="c.commentId" />
                <DeleteButtonComment v-bind:commentId="c.commentId" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ValidationButtonComment from "./ValidationButtonComment";
import DeleteButtonComment from "./DeleteButtonComment";

export default {
  name: "AllComments",
  components: { ValidationButtonComment, DeleteButtonComment },
  data() {
    return {
      comments: "",
    };
  },
  mounted() {
    const token = localStorage.getItem("userToken");
    axios
      .get("http://localhost:3000/api/comments/admin", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.comments = response.data;
        console.log(this.comments);
      })
      .catch((error) => console.error(error));
  },
};
</script>
