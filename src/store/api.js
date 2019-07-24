// import axios from 'axios'
import { API } from '../services/api';

const BASE_URL_USER = 'https://jsonplaceholder.typicode.com/users';
const BASE_URL_REDIT = 'https://www.reddit.com/';

export default {
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
    API.client.put(`https://jsonplaceholder.typicode.com/users/${data.id}`, JSON.stringify(data.updatedEmployee))
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data);
        }
      })
      .catch(() => {
        return Promise.reject(error);
      });
  },
}
