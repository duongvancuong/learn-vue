<template>
  <nav class="menu" tabindex="0">
    <div class="smartphone-menu-trigger"></div>
    <header class="avatar">
      <img src="../assets/images/avatar.png" />
      <h2>TekFun</h2>
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
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  components: {
  },
  data () {
    return {
      docked: false,
    }
  },
  methods: {
    ...mapMutations([
      'sideBarClose',
    ])
  },
  computed: {
    ...mapGetters([
      'openState',
    ])
  },
}

</script>

<style lang="scss" scoped>
@import '../styles/sidebar';
</style>
