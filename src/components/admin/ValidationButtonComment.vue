<template>
  <div id="ValidationButtonComment">
    <form @submit.prevent="onSubmit">
      <b-button
        pill
        variant="success"
        type="submit"
        v-model="validation"
        aria-label="Valider le commentaire"
        value="Submit"
        class="mb-2"
        size="sm"
        >Valider</b-button
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ValidationButtonComment",
  data: function() {
    return {
      validation: "",
    };
  },
  props: ["commentId"],
  methods: {
    onSubmit() {
      const id = this.commentId;
      console.log(id);
      const token = window.localStorage.getItem("userToken");
      axios
        .put(
          "http://localhost:3000/api/comments/" + id,
          {
            isPublic: "true",
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
      location.reload();
    },
  },
};
</script>
