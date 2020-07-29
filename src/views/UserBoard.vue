<template id="Forum">
  <div>
    <div class="card">
      <h3>Reddit</h3>
      <ConnectReddit />

      <Content />
    </div>
    <ShowAllPosts />
  </div>
</template>

<script>
import ShowAllPosts from "@/components/forum/ShowAllPosts.vue";
import ConnectReddit from "@/components/reddit/ConnectReddit.vue";
import Content from "@/components/reddit/Content.vue";

export default {
  name: "UserBoard",
  components: { ShowAllPosts, ConnectReddit, Content },
};
</script>

<style scoped>
.card-container.card {
  max-width: 330px !important;
  padding: 12px 28px;
  text-align: left;
}
</style>

