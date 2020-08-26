<template>
  <div id="ValidationButton">
    <form @submit.prevent="onSubmit">
      <b-button
        variant="success"
        type="submit"
        v-model="validation"
        value="Submit"
        class="mb-2"
        @click="makeToast('success')"
      >Valider</b-button>
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

    makeToast(variant = null) {
      this.$bvToast.toast("Le message a été validé", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>
