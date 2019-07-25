import { login, getInfo } from '@/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';

const state = {
  id: '',
  token: getToken(),
  email: '',
  first_name:'',
  last_name: '',
  avatar: '',
  roles: [],
  permissions: [],
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INFO: (state, info) => {
    state.id = info.id,
    state.email = info.email;
    state.last_name = info.last_name;
    state.last_name = info.last_name;
    state.avatar = info.avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_PREMISSIONS: (state, permissions) => {
    state.permissions = permissions;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { email, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ email: email.trim(), password }).then(response => {
        let data = response;
        commit('SET_TOKEN', data.token)
        setToken(data.token);
        resolve();
      }).catch(error => {
        reject(error);
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const data  = response;
        if (!data) {
          reject('Verification failed, please Login again.');
        }

        const { roles, email, avatar, permissions, first_name, last_name, id } = data;
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!');
        }

        commit('SET_ROLES', roles);
        commit('SET_INFO', { email, avatar, first_name, last_name, id });
        commit('SET_PREMISSIONS', permissions);
        resolve(data);
      }).catch(error => {
        reject(error);
      })
    })
  },

  // user logout
  // logout({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     logout(state.token).then(() => {
  //       commit('SET_TOKEN', '')
  //       commit('SET_ROLES', [])
  //       removeToken()
  //       resetRouter()
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      removeToken();
      resolve();
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
