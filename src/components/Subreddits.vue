<template>
  <div class="subreddits container">
    <ul class="item-list">
      <ul v-for="post in subreddits" :key="post.id">
        <li>
        <subreddit :item="post"></subreddit>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
require('../assets/sass/subreddits.scss');
import Subreddit from './Subreddit';
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'subreddits',
  data() {
    return {};
  },
  computed: {
    loading () {
      return this.$store.state.infiniteScrollEnable
    },
    scroller () {
      if(this.$route.name === 'home')
      {
        return this.$store.state.scroller
      } else {
        return null
      }
    },
    ...mapGetters({
      subreddits: 'getSubreddits',
      categories: 'getCategories',
      category: 'getCategory',
      sortOption: 'getSortOption',
      sortWay: 'getSort'
    }),
  },
  components: {
    Subreddit,
  },
  created() {
    this.$store.dispatch('getListData');
  },
  methods: {

  },
}
</script>

<style>

</style>
