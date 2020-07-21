<template>
  <div id="Forum">
    <AddNewPost />
    <ConnectReddit />
    <ShowAllPosts />
  </div>
</template>

<script>
import AddNewPost from "@/components/forum/AddNewPost.vue";
import ShowAllPosts from "@/components/forum/ShowAllPosts.vue";
import ConnectReddit from "@/components/reddit/ConnectReddit.vue";

export default {
  name: "Forum",
  components: { AddNewPost, ShowAllPosts, ConnectReddit }
};
</script>
