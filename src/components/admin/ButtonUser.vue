<template>
  <div>
    <div id="DeleteButton">
      <form @submit.prevent="onSubmit">
        <b-button type="submit" v-model="ButtonUser" value="Submit"
          >User</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ButtonAdmin",
  data: function() {
    return {
      ButtonUser: "",
    };
  },
  props: ["id"],
  methods: {
    onSubmit() {
      const id = this.id;
      const token = window.localStorage.getItem("userToken");

      axios
        .put(
          "http://localhost:3000/api/auth/users/" + id,
          { role: "user" },
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
