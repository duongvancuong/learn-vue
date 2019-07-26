<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!-- <sidebar></sidebar> -->
  </div>
</template>

<script>
require('./assets/css/animation.css');
// import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  // components: {
  //   Sidebar,
  // }
};
</script>

<style></style>
