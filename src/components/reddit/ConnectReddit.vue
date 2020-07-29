<template>
  <div>
    <router-link to="/a">Se connecter à Reddit</router-link>|
    <button v-on:click="RedditAuthorization">Autoriser Reddit</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Account",
  methods: {
    RedditAuthorization: function () {
      const params = new URL(document.location).searchParams;
      const code = params.get("code");
      const redirectUri = "http://localhost:8080/dashboard";
      const grantType = "authorization_code";
      console.log(code);
      axios
        .post(
          "https://www.reddit.com/api/v1/access_token",
          `grant_type=${grantType}&code=${code}&redirect_uri=${redirectUri}`,
          {
            headers: {
              Authorization:
                "Basic " +
                btoa(
                  process.env.VUE_APP_REDDIT_CLIENT_ID +
                    ":" +
                    process.env.VUE_APP_REDDIT_CLIENT_SECRET
                ),
            },
          }
        )
        .then((response) => {
          console.log(response);
          const redditToken = response.data.access_token;
          localStorage.setItem("access_token", redditToken);
        });
    },
  },
};
</script>
