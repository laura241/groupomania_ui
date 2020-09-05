<template>
  <div id="AddNewComment" class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Laissez un commentaire"
      aria-label
      aria-describedby="basic-addon1"
      name="comment"
      v-model="comment"
    />
    <div class="input-group-append">
      <button
        v-b-tooltip.hover
        title="Votre commentaire sera visible après modération"
        class="btn btn-primary"
        type="button"
        v-on:click="submitComment"
      >
        <b-iconstack font-scale="1">
          <b-icon stacked icon="check"></b-icon>
        </b-iconstack>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddNewComment",
  data: function () {
    return {
      comment: [],
    };
  },
  props: ["id"],
  methods: {
    submitComment() {
      const userId = localStorage.getItem("userId");
      const comment = {
        comment: this.comment,
        userId: userId,
        postId: this.id,
      };
      const token = localStorage.getItem("userToken");

      axios({
        url: "http://localhost:3000/api/comments",
        data: comment,
        method: "POST",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          this.$emit("comment-sent", response.data);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.comment = "";
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}
.card-container.card {
  max-width: 350px !important;
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

<style scoped>
label {
  display: block;
  margin-top: 10px;
}
.card-container.card {
  max-width: 350px !important;
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
