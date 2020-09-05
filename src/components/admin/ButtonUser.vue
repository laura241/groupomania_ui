<template>
  <div>
    <div id="DeleteButton">
      <form @submit.prevent="onSubmit">
        <b-button
          id="tooltip-target"
          pill
          variant="outline-success"
          type="submit"
          v-model="ButtonUser"
          value="Submit"
          aria-label="Bouton User"
          >User</b-button
        >
        <b-tooltip target="tooltip-target" triggers="hover"
          >Bouton user</b-tooltip
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
