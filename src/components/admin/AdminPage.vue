<template>
  <div class="card card-container" id="AdminPage">
    <div>
      <div>
        <div class="card card-container">
          <div>
            <div v-for="(p, i) in posts" :key="p + i">
              <b-card
                v-bind:title="p.title"
                v-bind:sub-title="p.createdAt | moment"
              >
                <b-card-text
                  >{{ p.user.firstName }}{{ p.user.lastName }}</b-card-text
                >
                <b-card-text>{{ p.post }}</b-card-text>
                <div v-if="p.link">
                  <b-embed
                    type="iframe"
                    aspect="16by9"
                    allowfullscreen
                    v-bind:src="p.link"
                  ></b-embed>
                </div>
                <br />
                <p v-for="comment in p.comments" :key="comment.commentId">
                  {{ comment.comment }}
                </p>
                <ValidationButton v-bind:id="p.postId" />
                <DeleteButton v-bind:id="p.postId" />
              </b-card>
            </div>
          </div>
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
    moment: function(date) {
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
};
</script>
