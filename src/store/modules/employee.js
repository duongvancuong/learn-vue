import * as types from '../mutation-types';
import { user } from '../api';

const state = {
  employees: [],
  isLoading: false,
  isAdding: false,
  isDeleting: false,
  isUpdating: false,
};

const getters = {
  getEmployees: state => state.employees,
  getStatus: state => ({
    isLoading: state.isLoading,
    isAdding: state.isAdding,
    isDeleting: state.isDeleting,
    isUpdating: state.isUpdating,
  }),
};

const mutations = {
  [types.GET_LIST_EMPLOYEES] (state, data) {
    state.employees = data;
  },
  [types.ADD_EMPLOYEE] (state, data) {
    state.employees = [...state.employees, data];
  },
  [types.DELETE_EMPLOYEE] (state, id) {
    state.employees = state.employees.filter(employee => employee.id !== id);
  },
  [types.UPDATE_EMPLOYEE] (state, data) {
    state.employees = state.employees.map(employee => (employee.id === data.id ? data : employee));
  },
  [types.COM_IS_EMPLOYEE_LOADING] (state, status) {
    state.isLoading = status;
  },
  [types.COM_IS_ADDING] (state, status) {
    state.isAdding = status;
  },
  [types.COM_IS_DELETING] (state, status) {
    state.isDeleting = status;
  },
  [types.COM_IS_UPDATING] (state, status) {
    state.isUpdating = status;
  },
};

const actions = {
  getListData: function ({ commit, state }) {
    commit(types.COM_IS_EMPLOYEE_LOADING, true);
    user.getEmployees(state, res => {
      commit(types.GET_LIST_EMPLOYEES, res);
      commit(types.COM_IS_EMPLOYEE_LOADING, false);
    });
  },
  addEmployee: function ({ commit }, employee) {
    commit(types.COM_IS_ADDING, true);
    user.addEmployee(employee, res => {
      commit(types.ADD_EMPLOYEE, res);
      commit(types.COM_IS_ADDING, false);
    });
  },
  deleteEmployee: function ({ commit }, id) {
    commit(types.COM_IS_DELETING, true);
    user.deleteEmployee(id, () => {
      commit(types.DELETE_EMPLOYEE, id);
      commit(types.COM_IS_DELETING, false);
    });
  },
  editEmployee: function ({ commit }, data) {
    commit(types.COM_IS_UPDATING, true);
    user.editEmployee(data, (res) => {
      commit(types.UPDATE_EMPLOYEE, res);
      commit(types.COM_IS_UPDATING, false);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
