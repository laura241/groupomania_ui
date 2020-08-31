<template>
  <div id="AddNewPost">
    <b-container fluid="md">
      <div class="card">
        <form @submit.prevent="onSubmit">
          <h3>Ecrire un nouveau post</h3>
          <div>
            <label for="input-default"></label>
            <b-form-input id="title" placeholder="titre" type="text" v-model="title" name="title" />
          </div>
          <br />
          <div id="textarea-large" placeholder="votre message">
            <label for="post"></label>
            <b-form-input
              id="title"
              placeholder="Votre message"
              type="text"
              v-model="post"
              name="post"
            />
          </div>
          <br />
          <div>
            <label for="link"></label>
            <b-form-input
              id="link"
              placeholder="Partager un lien"
              type="link"
              v-model="link"
              name="link"
            />
            <br />
            <b-button
              variant="info"
              @click="makeToast('Information')"
              class="mb-2"
              type="submit"
              value="Submit"
            >Envoyer</b-button>
          </div>
        </form>
      </div>
    </b-container>
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
    onSubmit() {
      const userId = localStorage.getItem("userId");
      const token = window.localStorage.getItem("userToken");
      var link = this.link;

      if (link) {
        if (link.includes("embed")) {
          console.log(link);
        } else {
          const url = link.split("v=");
          link = "https://www.youtube.com/embed/" + url[1];
        }
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
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Votre message a été envoyé au modérateur", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>
