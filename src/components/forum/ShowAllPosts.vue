<template>
  <div id="ShowAllMessages">
    <div class="jumbotron">
      <h1 class="display-4">Dernières publications</h1>
      <div v-for="(l, i) in lastPosts" :key="l + i">
        <div>{{ l.user.firstName }}{{ l.user.lastName }}</div>
        <p>{{ l.post }}</p>
        <p>"{{ l.createdAt }}| "moment""</p>
        <p v-for="comment in l.comments" :key="comment.commentId">
          {{ comment.comment }}{{ comment.createdAt }}
        </p>
      </div>
    </div>

    <AddNewPost @post-sent="updatePosts" />
    <br />
    <div>
      <div v-for="(p, i) in posts" :key="p + i">
        <b-card
          v-bind:title="p.title"
          v-bind:sub-title="p.createdAt | moment"
          class="card-text"
        >
          <b-card-text class="card-text"
            >{{ p.user.firstName }}{{ p.user.lastName }}</b-card-text
          >
          <b-card-text>{{ p.post }}</b-card-text>
          <div v-if="p.link">
            <div v-if="checkLink(p.link) == 'video'">
              <b-embed
                type="iframe"
                aspect="16by9"
                allowfullscreen
                v-bind:src="p.link"
              ></b-embed>
            </div>
            <div v-else>
              <a href="p.link">{{ p.link }}</a>
            </div>
          </div>

          <br />

          <b-button v-b-toggle.collapse-1-inner size="sm"
            >Voir les commentaires</b-button
          >
          <b-collapse id="collapse-1-inner" class="mt-2">
            <div v-for="comment in p.comments" :key="comment.commentId">
              <div class="card-header p-0 px-3">
                <div class="row py-3">
                  <div class="mx-3 user">
                    <div class="isAuthor" href="#">
                      {{ comment.firstName }}{{ comment.lastName }}
                    </div>
                    <div class="ml-auto mr-4 card-body">
                      <div class="card-text">
                        {{ comment.comment }}
                      </div>
                    </div>
                    <ValidationButtonComment
                      v-bind:commentId="comment.commentId"
                    />
                    <DeleteButtonComment v-bind:commentId="comment.commentId" />
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
          <AddNewComment @comment-sent="updateComments" v-bind:id="p.postId" />
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mainAxios } from "../../../http-common";
import AddNewComment from "./AddNewComment";
import AddNewPost from "./AddNewPost";
import moment from "moment";
import ValidationButtonComment from "../admin/ValidationButton";
import DeleteButtonComment from "../admin/DeleteButton";

export default {
  name: "ShowAllPosts",
  data() {
    return {
      posts: [],
      lastPosts: "",
      searchResults: "",
    };
  },
  components: {
    AddNewComment,
    AddNewPost,
    ValidationButtonComment,
    DeleteButtonComment,
  },
  filters: {
    moment: function(date) {
      return moment(date).format("DD MM YYYY, h:mm a");
    },
  },
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
        this.posts = response.data;
        console.log(this.posts);
      })
      .catch((error) => console.error(error));

    mainAxios
      .request({
        url: "/posts/lastposts",
        method: "get",
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.lastPosts = response.data;
      })
      .catch((error) => console.error(error));
  },

  methods: {
    updateComments(e) {
      this.posts = this.posts.map((p) => {
        if (p.postId === e.postId) {
          return e;
        }
        return p;
      });
    },
    updatePosts(e) {
      console.log(e);
      console.log(e); //{post: toto, userId: 144}
      this.posts.push(e);
    },
    showSearchResults(e) {
      console.log(e);
      const token = localStorage.getItem("userToken");
      mainAxios
        .request({
          url: "/posts/admin",
          method: "GET",
          headers: {
            Authorization: token,
          },
          params: {
            search: e,
          },
        })
        .then((response) => {
          this.searchResults = response.data;
          console.log(this.searchResults);
        })
        .catch((error) => console.error(error));
    },
    checkLink(link) {
      if (link.includes("youtube") || link.includes("dailymotion")) {
        return "video";
      } else {
        return "text";
      }
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
© 2020 GitHub, Inc.
