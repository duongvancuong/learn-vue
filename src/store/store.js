import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import employee from './modules/employee';
import redidit from './modules/redidit';
import imgView from './modules/imgView';
import post from './modules/post';
import user from './modules/user';
import permission from './modules/permission';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    infiniteScrollEnable: false,
    scroller: window,
  },
  getters,
  mutations,
  actions,
  modules: {
    employee,
    redidit,
    imgView,
    post,
    user,
    permission,
  },
  // plugins: [
  //   createPersistedState({
  //     storage: {
  //       getItem: key => Cookies.get(key),
  //       setItem: (key, value) =>
  //         Cookies.set(key, value, { expires: 3, secure: true }),
  //       removeItem: key => Cookies.remove(key),
  //     },
  //   }),
  // ],
});
