<template>
  <b-container>
    <div>
      <div>
        <div class="card card-container">
          <table stickyColumn="true">
            <tr>
              <th>Posts</th>
            </tr>
            <!-- Iteration over all posts with isPublic= false -->
            <tr v-for="(p, i) in posts" :key="p + i">
              <td>
                {{ p.user.firstName }}{{ p.user.lastName }}
                <br />
                {{p.title}}
                <br />
                {{p.post}}
                <br />
                {{p.link}}
                <br />
                {{p.createdAt | moment}}
              </td>
              <td>
                <ValidationButton v-bind:id="p.postId" />
                <DeleteButton v-bind:id="p.postId" />
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
import ValidationButton from "./ValidationButton";
import DeleteButton from "./DeleteButton";
import moment from "moment";
export default {
  name: "AdminPAge",
  components: { ValidationButton, DeleteButton },
  filters: {
    moment: function (date) {
      return moment(date).format("DD MM YYYY");
    },
  },
  data() {
    return {
      posts: "",
    };
  },
  mounted() {
    const token = localStorage.getItem("userToken");
    axios
      .get("http://localhost:3000/api/posts/admin", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.posts = response.data;
        console.log(this.posts);
      })
      .catch((error) => console.error(error));
  },
};
</script>
