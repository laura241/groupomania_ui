<template>
  <div id="search-container" class="container">
    <div id="search" class="card card-body bg-light mb-2">
      <h4>Recherche Reddit</h4>
      <form id="search-form">
        <div class="form-group">
          <input
            type="text"
            id="search-input"
            class="form-control mb-3"
            placeholder="Mots clefs..."
            v-model="query"
          />
        </div>
        <div class="form-check form-check-inline">
          Sort by:
          <input
            class="form-check-input ml-2"
            type="radio"
            name="sortby"
            value="relevance"
            checked
          />
          <label class="form-check-label">Relevance</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input ml-2" type="radio" name="sortby" value="new" checked />
          <label class="form-check-label">Latest</label>
        </div>
        <h5 class="mt-2">Limit:</h5>
        <div class="form-group">
          <select name="limit" id="limit" v-model="limit" class="form-control">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <button type="submit" required value="Submit" class="btn btn-dark btn-block mt-4">Search</button>
      </form>
    </div>
    <div id="results">{{results}}</div>
  </div>
</template>

<script>
import { redditAxios } from "../../../http-common";
export default {
  name: "subredditName",
  data: function () {
    return {
      query: "",
      results: "",
      sortBy: "",
      limit: "",
    };
  },
  methods: {
    onSubmit() {
      redditAxios({
        url: `/r/subreddit/search?q=${this.query}&sort=${this.sortBy}&limit=${this.limit}`,
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => console.log(data.data.children.map))

        .catch((err) => {
          err;
        });
    },
  },
};
</script>


   