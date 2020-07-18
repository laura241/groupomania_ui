<template>
  <div>
    <button v-on:click="RedditAuthorization">
      <router-link to="/a">Se connecter à Reddit</router-link>|
    </button>
    <button v-on:click="RedditAuthorization">Autoriser Reddit</button>
  </div>
</template>

<script>
import { redditAxios } from "../../../http-common";
export default {
  name: "Account",
  methods: {
    RedditAuthorization: function() {
      let params = new URL(document.location).searchParams;
      let state = params.get("state");
      let code = params.get("code");
      console.log(state);
      console.log(code);
      redditAxios({
        url: "https://www.reddit.com/api/v1/access_token",
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            btoa(
              process.env.VUE_APP_REDDIT_CLIENTId +
                ":" +
                process.env.VUE_APP_REDDIT_CLIENTSecret
            )
        },
        data: {
          grant_type: "authorization_code",
          code: code,
          redirect_uri: "http://localhost:8080/dashboard/forum"
        }
      });
    }
  }
};
</script>