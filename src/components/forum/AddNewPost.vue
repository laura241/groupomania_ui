<template>
  <div>
    <b-card title="Ecrire un nouveau post" style="max-width: 20rem" class="mb-2">
      <b-form @submit.prevent="onSubmit">
        <b-card-text>
          <b-form-group>
            <label for="input-default"></label>
            <b-form-input id="title" placeholder="titre" type="text" v-model="title" name="title" />
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
            <b-form-text id="link-help-block">
              Vous pouvez partager ici le lien url de votre article ou celui de
              votre vidéo YouTube.
            </b-form-text>
          </b-form-group>
          <b-form-group>
            <b-button
              @click="$bvToast.show('newPost-toast')"
              variant="info"
              class="mb-2"
              type="submit"
              aria-label="Submit"
              value="Submit"
            >Envoyer</b-button>
            <b-toast
              id="newPost-toast"
              title="Votre message a été envoyé"
              static
              no-auto-hide
            >Il sera visible après validation du modérateur</b-toast>
          </b-form-group>
        </b-card-text>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddNewPost",
  data: function () {
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
