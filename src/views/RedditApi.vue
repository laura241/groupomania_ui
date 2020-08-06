<template>
  <div class="card">
    <h3>Reddit</h3>
    <ConnectReddit />
    <Subreddits />
    <Content />
  </div>
</template>

<script>
import ConnectReddit from "@/components/reddit/ConnectReddit.vue";
import Content from "@/components/reddit/Content.vue";
import Subreddits from "@/components/reddit/Subreddits.vue";

export default {
  name: "RedditApi",
  components: { ConnectReddit, Content, Subreddits },
};
</script>