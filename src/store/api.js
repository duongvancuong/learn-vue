import axios from 'axios'

//Define API request URL and request process

const url = 'https://jsonplaceholder.typicode.com/users'

export default {
  getEmployees: function (_, cb) {
    axios.get(url)
      .then((res) => {
          if(res.status >= 200 && res.status < 300) {
              cb(res.data);
          }
      })
      .catch((error) => {
          return Promise.reject(error);
      });
  },
}
