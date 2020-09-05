<template>
  <b-container fluid>
    <div class="card card-container">
      <table>
        <tr>
          <th>Utilisateur</th>
          <th>Rôle</th>
          <th>Participation</th>
        </tr>
        <!-- Iteration over users -->
        <tr v-for="(u, i) in users" :key="u + i">
          <td>{{ u.firstName }} {{ u.lastName }}</td>
          <td>
            {{ u.role }}
            <ButtonAdmin v-if="u.role === 'user'" v-bind:id="u.userId" />
            <span class="spaceButton"></span>
            <ButtonUser v-if="u.role === 'admin'" v-bind:id="u.userId" />
          </td>
          <td>
            <!-- Posts modal -->
            <b-button
              variant="outline-primary"
              size="sm"
              v-b-modal="`posts-modal${u.userId}`"
            >Voir les posts</b-button>
            <b-modal :id="`posts-modal${u.userId}`">
              <div v-for="post in u.posts" :key="post.postId">
                {{ post.title }} {{ post.post }}
                {{ post.createdAt | moment("DD MM YYYY") }}
              </div>
            </b-modal>

            <!-- Comments modal -->
            <b-button
              v-on:click="() => getAllCommentsByUser(u.userId)"
              size="sm"
              variant="outline-secondary"
              v-b-modal="`comments-modal${u.userId}`"
            >Voir les comm.</b-button>
            <b-modal :id="`comments-modal${u.userId}`">
              <div v-for="c in comments" :key="c.commentId">
                {{ c.comment }}
                {{ c.createdAt | moment("DD MM YYYY") }}
              </div>
            </b-modal>
          </td>
        </tr>
      </table>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
import ButtonAdmin from "./ButtonAdmin";
import ButtonUser from "./ButtonUser";

export default {
  name: "AllUsers",
  components: { ButtonAdmin, ButtonUser },
  data() {
    return {
      users: "",
      posts: [],
      comments: [],
    };
  },
  mounted() {
    const token = localStorage.getItem("userToken");
    axios
      .request({
        url: "http://localhost:3000/api/auth/users",
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => console.error(error));
  },
  methods: {
    getAllCommentsByUser(userId) {
      const token = window.localStorage.getItem("userToken");
      console.log(userId);
      axios
        .get("http://localhost:3000/api/comments/users/" + userId, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log("getAllCommentsByUser", response);
          this.comments = response.data;
        });
    },
  },
};
</script>


