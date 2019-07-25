import fetch from '@/utils/fetch';

export function login(data) {
  return fetch({
    url: '/api/login',
    method: 'post',
    data: {
      email: data.email,
      password: data.password,
    },
  });
};

export function getInfo() {
  return fetch({
      url: '/api/user/2',
      method: 'get'
  })
};
