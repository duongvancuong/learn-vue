<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
require('./assets/css/animation.css');
export default {
  name: 'App',
};
</script>

<style></style>
