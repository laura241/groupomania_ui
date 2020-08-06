<template>
  <div>
    <div class="form-group">
      <h3>En ce moment</h3>
      <p>{{liveThread}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      liveThread: "",
    };
  },
  mounted() {},
};
</script>




