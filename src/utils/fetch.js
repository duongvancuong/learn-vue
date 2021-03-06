import axios from 'axios';
import { getToken  } from '@/utils/auth';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || "https://reqres.in/",
  timeout: 60000,
  // withCredentials: true,
});

service.interceptors.request.use(config => {
  if (getToken()) {
    config.headers['Authorization'] = "Bearer " + getToken();
  }
  config.headers['Access-Control-Allow-Origin'] = "*";
  return config;
}, error => {
  // Do fucking awesome
  return Promise.reject(error);
})

service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    console.log(error.response);
    if (!error.response)
      throw Object.assign({ error_code: 700, message: 'Something went wrong!' });
    return Promise.reject(error);
  }
)

export default service;
