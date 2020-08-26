<template>
  <div id="AddNewPost">
    <b-container fluid="md">
      <div>
        <h3>Ecrire un nouveau post</h3>
        <form @submit.prevent="onSubmit">
          <div>
            <label for="post">Titre</label>
            <input id="title" type="text" v-model="title" name="title" />
          </div>

          <div id="textarea-large" placeholder="votre message">
            <label for="post">Message</label>
            <input id="title" type="text" v-model="post" name="post" />
          </div>

          <div>
            <label for="link">Partager un lien</label>
            <input id="link" type="link" v-model="link" name="link" />
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
      axios
        .post(
          "http://localhost:3000/api/posts",
          {
            title: this.title,
            post: this.post,
            link: this.link,
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
