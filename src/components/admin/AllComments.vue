<template>
  <b-container>
    <div id="AllComments">
      <div>
        <div>
          <div class="card card-container">
            <table responsive stickyColumn="true">
              <tr>
                <th>Commentaires</th>
              </tr>
              <!-- Iteration over all comments with isPublic= false -->
              <tr v-for="(c, i) in comments" :key="c + i">
                <td>
                  {{ c.user.lastName }}{{ c.user.firstName }}
                  <br />
                  {{ c.comment }}
                  <br />
                  {{ c.postId }}
                  <br />
                  {{ c.createdAt | moment("DD MM YYYY") }}
                </td>
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
  </b-container>
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
