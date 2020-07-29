<template>
  <div>
    <div class="form-group">
      <div>
        <h3>Créer un post reddit</h3>
        <ul>
          <li>
            <label for="title">Titre</label>
            <input id="title" type="text" required v-model="title" name="title" />
          </li>
          <li>
            <label for="url">url</label>
            <input id="url" type="url" required v-model="url" name="url" />
          </li>
          <li>
            <label for="text">text</label>
            <input id="text" type="text" required v-model="text" name="text" />
          </li>
          <li>
            <label for="sr">sr</label>
            <input id="sr" type="text" required v-model="sr" name="sr" />
          </li>
          <li>
            <label for="text">resubmit</label>
            <input id="resubmit" type="text" required v-model="resubmit" name="resubmit" />
          </li>
          <li>
            <label for="send_replies">send_replies</label>
            <input
              id="send_replies"
              type="text"
              required
              v-model="send_replies"
              name="send_replies"
            />
          </li>
        </ul>
        <button v-on:click="SearchSubreddit">Partager</button>
      </div>
    </div>
  </div>
</template>

<script>
import { redditAxios } from "../../../http-common";
export default {
  name: "Content",
  data() {
    return {
      title: "",
      url: "",
      text: "",
      sr: "",
      resubmit: "",
      send_replies: "",
    };
  },
  methods: {
    SearchSubreddit: function () {
      const kind = "self";
      const data = JSON.stringify({
        kind: kind,
        resubmit: this.resubmit,
        send_replies: this.send_replies,
        text: this.text,
        title: this.title,
        url: this.url,
      });
      redditAxios
        .request({
          url: "/api/submit",
          method: "post",
          data: data,
          api_type: "json",
          success: "onSuccess",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>




