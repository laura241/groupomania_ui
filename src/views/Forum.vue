<template>
  <div id="Forum">
    <AddNewMessage />
    <ShowAllMessages />
  </div>
</template>

<script>
import AddNewMessage from "@/components/forum/AddNewMessage.vue";
import ShowAllMessages from "@/components/forum/ShowAllMessages.vue";
export default {
  components: { AddNewMessage, ShowAllMessages }
};
</script>

