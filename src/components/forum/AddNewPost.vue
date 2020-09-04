<template>
  <b-container fluid>
    <div class="card">
      <b-form @submit.prevent="onSubmit">
        <h3>Ecrire un nouveau post</h3>
        <b-form-group>
          <label for="input-default"></label>
          <b-form-input
            id="title"
            placeholder="titre"
            type="text"
            v-model="title"
            name="title"
          />
        </b-form-group>
        <br />
        <b-form-group>
          <label for="post"></label>
          <b-form-input
            id="post"
            placeholder="Votre message"
            type="text"
            v-model="post"
            name="post"
            aria-label="Votre message"
          />
        </b-form-group>
        <br />
        <b-form-group>
          <label for="link"></label>
          <b-form-input
            id="link"
            placeholder="Partager un lien"
            type="url"
            v-model="link"
            name="link"
            aria-label="Partager un lien"
          />
          <b-form-text id="link-help-block"
            >Vous pouvez partager ici le lien url de votre article ou celui de
            votre vidéo YouTube.</b-form-text
          >
        </b-form-group>
        <b-form-group>
          <b-button
            variant="info"
            class="mb-2"
            type="submit"
            aria-label="Submit"
            value="Submit"
            >Envoyer</b-button
          >
        </b-form-group>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "AddNewPost",
  data: function() {
    return {
      title: "",
      post: "",
      link: "",
    };
  },
  methods: {
    onSubmit(event) {
      const userId = localStorage.getItem("userId");
      const token = window.localStorage.getItem("userToken");
      var link = this.link;

      if (link.includes("youtube")) {
        const url = link.split("v=");
        link = "https://www.youtube.com/embed/" + url[1];
      }

      axios
        .post(
          "http://localhost:3000/api/posts",
          {
            title: this.title,
            post: this.post,
            link: link,
            userId: userId,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          this.$emit("post-sent", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      event.target.reset();
    },
  },
};
</script>
