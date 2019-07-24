<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <sidebar></sidebar>
  </div>
</template>

<script>
require('./assets/css/animation.css');
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar,
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
