<template>
  <div id="ValidationButton">
    <form @submit.prevent="onSubmit">
      <b-button
        pill
        variant="success"
        type="submit"
        v-model="validation"
        value="Submit"
        class="mb-2"
        size="sm"
        aria-label="Valider le post"
      >
        <b-icon icon="check" aria-hidden="true"></b-icon>
      </b-button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ValidationButton",
  data: function () {
    return {
      validation: "",
    };
  },
  props: ["id"],
  methods: {
    onSubmit() {
      const id = this.id;
      const token = window.localStorage.getItem("userToken");
      axios
        .put(
          "http://localhost:3000/api/posts/" + id,
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
