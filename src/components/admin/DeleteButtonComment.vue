<template>
  <div id="DeleteButtonComment">
    <form @submit.prevent="onSubmit">
      <b-button variant="danger" type="submit" v-model="deleteMessage" value="Submit">Supprimer</b-button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteButton",
  data: function () {
    return {
      deleteMessage: "",
    };
  },
  props: ["commentId"],
  methods: {
    onSubmit() {
      const id = this.commentId;
      const token = window.localStorage.getItem("userToken");

      axios
        .delete("http://localhost:3000/api/comments/" + id, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(response);
        });
      location.reload();
    },
  },
};
</script>