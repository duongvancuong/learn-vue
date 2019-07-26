<template>
  <div class="subreddit">
    <router-link
      v-lazy:background-image="makeImage(item.data.thumbnail)"
      class="thumbnail"
      tag="div"
      :to="{ name: 'imageViewer' }"
      @click.native="sendImgData(item.data.url)"
    />
    <div class="details">
      <router-link
        :to="{ name: 'subdetail', params: { id: item.data.name } }"
        @click.native="sendID(item.data.name)"
        class="title"
      >
        {{item.data.title | truncate}}
      </router-link>
      <br />
      <div class="stats">
        <i class="iconfont icon-good"></i>
        {{item.data.score}}
        <i class="iconfont icon-comment"></i>
        {{item.data.num_comments}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subreddit',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    makeImage: function(img) {
      return img;
    },
    makeUrl: function(permalink) {
      return 'http://reddit.com' + permalink;
    },
    hasImgLink: function(link) {
      let linkArray = link.split('.');
      return linkArray[linkArray.length - 1] === 'jpg';
    },
    sendImgData: function(imgUrl) {
      if (this.hasImgLink(imgUrl))
      {
        this.$store.dispatch('passURL', imgUrl);
      } else {
        this.$store.dispatch('passURL', this.item.data.thumbnail);
      }
    },
    sendID: function(id) {
    }
  },
  filters: {
    truncate: function(val) {
      let length = 70;
      if(val.length <= length) {
        return val;
      } else {
        return val.substring(0, length-3) + '...';
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../styles/subreddit';
</style>
