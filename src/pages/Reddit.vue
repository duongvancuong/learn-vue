<template>
  <div class="home">
    <v-touch @doubletap="refresh">
      refresh
    </v-touch>
    <subreddits class="container"></subreddits>
  </div>
</template>


<script>
import Subreddits from '@/components/Subreddits';

export default {
  name: 'reddit',
  components: {
    Subreddits,
  },
  data() {
    return {

    };
  },
  methods: {
    refresh () {
      this.$store.dispatch('refreshList');
    },
  },
}
</script>

<style scoped>
.home {
  color: #666666;
  background: #f4f4f4;
}
.container {
  padding-top: 56px;
}
</style>
