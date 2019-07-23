import * as types from '../mutation-types';
import api from '../api';

const state = {
  employees: [],
  isLoading: false,
};

const getters = {
  getEmployees: state => state.employees,
};

const mutations = {
  [types.GET_LIST_DATA] (state, data) {
    state.employees = data;
  },
  [types.COM_IS_LOADING] (state, status) {
    state.isLoading = status;
  },
};

const actions = {
  getListData: function ({commit, state}) {
    commit(types.COM_IS_LOADING, true);
    api.getEmployees(state, (res) => {
      commit(types.GET_LIST_DATA, res)
    });
    commit(types.COM_IS_LOADING, false);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
