<template>
  <div id="AddNewMessage">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="message">Ecrire un nouveau post</label>
        <input id="message" type="text" v-model="message" name="message" />
        <button type="submit" value="Submit">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mainAxios } from "../../../http-common";

export default {
  name: "AddNewMessage",
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    onSubmit() {
      const userId = localStorage.getItem("userId");
      const message = {
        message: this.message,
        userId: userId
      };
      mainAxios({
        url: "http://localhost:3000/api/messages",
        data: message,
        method: "POST"
      }).catch(error => {
        console.log(error);
      });
    }
  }
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

