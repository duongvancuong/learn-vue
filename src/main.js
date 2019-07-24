// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App';
import router from './router';
import VueTouch from 'vue-touch';
import { store } from './store/store';

Vue.config.productionTip = false;

//vue-touch gesture configuration
VueTouch.config.swipe = {
  direction: 'horizontal'
};

//vue-touch configuration
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
});

//Apply plugin for vue
Vue.use(VueTouch, {name: 'v-touch'});

Vue.use(VueLazyload, {
  preLoad: 1.2,
  loading: '../src/assets/images/loading.gif',
  error: '//ojt3x01ru.bkt.clouddn.com/image/post/Article.png',
  attempt: 2,
  listenEvents: [ 'scroll' ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
