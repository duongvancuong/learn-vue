<template>
  <div class="subdetail">
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  name: 'subdetail',
  methods: {
    backToHome () {
      this.$router.push({ name: 'home' });
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 56px;
}
</style>
