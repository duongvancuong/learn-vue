import { getMembers } from '@/api/member';

const state = {
  meta: {},
  members: [],
  errors: {},
};

const getters = {
  getMembers: state => state.members,
  getError: state => state.errors,
  getMeta: state => state.meta,
};

const mutations = {
  SET_MEMBERS: (state, res) => {
    state.members = res.data;
    state.meta = {
      page: res.page,
      per_page: res.per_page,
      total: res.total,
      total_pages: res.total_pages,
    };
  },
};

const actions = {
  getMembers({ commit }, params) {
    return new Promise((resolve, reject) => {
      getMembers(params).then(res => {
        commit('SET_MEMBERS', res);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
