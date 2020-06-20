<template>
  <div id="AddNewMessage">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="newMessage">Ecrire un nouveau post</label>
        <input id="newMessage" type="text" v-model="newMessage" name="newMessage" />
      </div>
    </form>
  </div>
</template>

<script>
import http from "../../../http-common";
export default {
  name: "AddNewMessage",
  data: function() {
    return {
      newMessage: ""
    };
  },
  methods: {
    onSubmit(e) {
      const data = {
        newMessage: this.newMessage
      };
      if (newMessage.length > 0) {
        http
          .post("/messages", data)
          .then(message => {
            res.status(201).send({ message: "Message envoyé!" });
          })
          .catch(error =>
            res.status(500).json({
              error
            })
          );
      }
    }
  }
};
</script>