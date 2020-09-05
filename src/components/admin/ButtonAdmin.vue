<template>
  <div>
    <div id="DeleteButton">
      <form @submit.prevent="onSubmit">
        <b-button
          id="tooltip-target-1"
          pill
          variant="outline-info"
          type="submit"
          v-model="ButtonAdmin"
          aria-label="Bouton admin"
          value="Submit"
          >Admin</b-button
        >
        <b-tooltip target="tooltip-target-1" triggers="hover"
          >Bouton Admin</b-tooltip
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
