import axios from 'axios'
import { API } from '../services/api';

const BASE_URL_USER = 'https://jsonplaceholder.typicode.com/users';
const BASE_URL_REDIT = 'https://www.reddit.com/';

export const user = {
  getEmployees: function (_, cb) {
    API.client.get(BASE_URL_USER)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data);
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  addEmployee: function (employee, cb) {
    API.client.post(BASE_URL_USER, JSON.stringify(employee))
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        cb(res.data);
      }
    })
    .catch(() => {
      return Promise.reject(error);
    });
  },
  deleteEmployee: function (id, cb) {
    API.client.delete(`${BASE_URL_USER}/${id}`)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          cb();
        }
      })
      .catch(() => {
        return Promise.reject(error);
      });
  },
  editEmployee: function (data, cb) {
    API.client.put(`${BASE_URL_USER}/${data.id}`, JSON.stringify(data.updatedEmployee))
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data);
        }
      })
      .catch(() => {
        return Promise.reject(error);
      });
  },
};

export const reddit = {
  getSubreddits: function (state, cb) {
    // eg: https://www.reddit.com/r/all/top.json?limit=25
    axios.get(`${BASE_URL_REDIT}r/${state.category}/${state.sortWay}.json?limit=${state.pageLimit}`)
      .then((res) => {
        if(res.status >= 200 && res.status < 300) {
          cb(res.data.data.children)
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  getMoreSub: function (state, cb) {
    // eg: https://www.reddit.com/r/all/top.json?limit=25&after=t3_60445l
    axios.get(`${BASE_URL_REDIT}r/${state.category}/${state.sortWay}.json?limit=${state.pageLimit}&after=${state.lastID}`)
      .then((res) => {
        if(res.status >= 200 && res.status < 300) {
          cb(res.data.data.children);
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  getPostDetail: function (state, cb) {
    // eg: https://www.reddit.com/by_id/t3_15bfi0.json
    axios.get(`${BASE_URL_REDIT}/by_id/${state.id}.json`)
      .then((res) => {
        if(res.status >= 200 && res.status < 300) {
          cb(res.data.children);
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      })
  },
};
