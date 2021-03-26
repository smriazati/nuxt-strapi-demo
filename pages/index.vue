<template>
  <div>
    <div v-for="item in articles" :key="item.id">
      <h2>{{ item.title }}</h2>
    </div>
  </div>
</template>

<script>
//
import { allArticlesQuery } from "~/graphql/queries";

export default {
  data() {
    return {
      articles: [],
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticlesQuery,
    },
  },
};
</script>

<style>
* {
  font-size: 1em;
  font-family: serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: normal;
}
</style>
