<template>
<div>
<form @submit.prevent="onSubmit">
    <div class="form-group">
          <label for="subredditName">Recherchez un subreddit</label>
          <input id="subredditName" type="text" v-model="subredditName" name="subredditName" />
        </div>
         <div class="form-group">
          <input type="submit" required value="Submit" />
        </div>


</div>
    
</template>

<script>
import {redditAxios} from '../../../http-common';
export default {
    name:'subredditName',
    data: function() {
    return {
      subredditName: "",
    };
  },
  methods: {
    onSubmit() {
      const { subredditName } = this;
      redditAxios({
          url:/api/search_reddit_names,
          data: subredditName,
          method: 'GET'
      })
      .then(resp => {
          resp
      })
      
      .catch(err => {
          err
      })
      
    }
  }
};

</script>


   