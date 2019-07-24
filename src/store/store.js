import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import employee from './modules/employee';

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
  },
});
