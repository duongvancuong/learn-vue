// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import ElementUI from 'element-ui';
import VueTouch from 'vue-touch';

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css';
// Global CSS
import '@/styles/index.scss';

import App from './App';
import router from './router';
import { store } from './store/store';
import permission from '@/directive/permission/index.js';

import '@/permission';

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
Vue.use(ElementUI);

Vue.use(VueLazyload, {
  preLoad: 1.2,
  loading: '../src/assets/images/loading.gif',
  error: '//ojt3x01ru.bkt.clouddn.com/image/post/Article.png',
  attempt: 2,
  listenEvents: [ 'scroll' ]
});

Vue.use(permission);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
