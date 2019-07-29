<template>
  <el-aside width="240px" style="background-color: rgb(238, 241, 246)">
    <nav class="menu" tabindex="0">
      <div class="smartphone-menu-trigger"></div>
      <header class="avatar">
        <img :src="avatar" />
        <h2>{{ name }}</h2>
      </header>
      <ul>
        <router-link :to="{ name: 'home' }" tag="div" active-class="active-item" exact>
          <li tabindex="0" class="icon-dashboard"><span>Home</span></li>
        </router-link>
        <router-link :to="{ name: 'Employee' }" tag="div" active-class="active-item">
          <li tabindex="0" class="icon-dashboard"><span>Employee</span></li>
        </router-link>
        <router-link :to="{ name: 'reddit' }" tag="div" active-class="active-item">
          <li tabindex="0" class="icon-dashboard"><span>Reddit</span></li>
        </router-link>
      </ul>
    </nav>
  </el-aside>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'sidebar',
  computed: {
    ...mapGetters([
      'avatar',
      'name',
    ]),
  },
}

</script>

<style lang="scss" scoped>
@import '../../styles/sidebar';
</style>
