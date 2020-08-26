<template>
  <div>
    <div id="DeleteButton">
      <form @submit.prevent="onSubmit">
        <b-button type="submit" v-model="ButtonAdmin" value="Submit"
          >Administrateur</b-button
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
      ButtonAdmin: "",
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
          { role: "admin" },
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
