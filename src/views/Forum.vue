<template>
  <div id="Forum">
    <AddNewMessage />
    <ConnectReddit />
    <ShowAllMessages />
  </div>
</template>

<script>
import AddNewMessage from "@/components/forum/AddNewMessage.vue";
import ShowAllMessages from "@/components/forum/ShowAllMessages.vue";
import ConnectReddit from "@/components/reddit/ConnectReddit.vue";
import { mainAxios } from "../../http-common";

export default {
  name: "Forum",
  components: { AddNewMessage, ShowAllMessages, ConnectReddit },
  data() {
    return {
      userForum: {
        userId: this.props.userId,
        firstName: this.props.firstName,
        lastName: this.props.lastName
      }
    };
  },
  props: {
    user: { type: Object, default: null }
  },

  mounted() {
    const token = localStorage.getItem("userToken");
    mainAxios
      .request({
        url: "/auth/users",
        method: "get",
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        this.props = response.data;
        console.log(this.props);
      })
      .catch(error => console.error(error));
  }
};
</script>
