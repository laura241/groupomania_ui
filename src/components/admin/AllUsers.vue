<template>
  <div>
    <div class="card card-container">
      <table>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Rôle</th>
        </tr>
        <tr v-for="(u, i) in users" :key="u + i">
          <td>{{ u.firstName }}</td>
          <td>{{ u.lastName }}</td>
          <td>{{ u.role }}</td>
          <td>
            <ButtonAdmin v-if="u.role === 'user'" v-bind:id="u.userId" />
          </td>
          <td>
            <ButtonUser v-if="u.role === 'admin'" v-bind:id="u.userId" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonAdmin from "./ButtonAdmin";
import ButtonUser from "./ButtonUser";
export default {
  name: "AllUsers",
  components: { ButtonAdmin, ButtonUser },
  data() {
    return {
      users: "",
    };
  },
  mounted() {
    const token = localStorage.getItem("userToken");
    axios
      .request({
        url: "http://localhost:3000/api/auth/users",
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.users = response.data;
        console.log(this.users);
      })
      .catch((error) => console.error(error));
  },
};
</script>
