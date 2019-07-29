import fetch from '@/utils/fetch';

export function getMembers(params) {
  return fetch({
    url: '/api/users',
    method: 'get',
    params,
  });
};

export function updateMember(id, params) {
  return fetch({
    url: `api/users/${id}`,
    method: 'patch',
    params,
  });
};

export function createMember(parmas) {
  return fetch({
    url: `api/users`,
    method: 'post',
    params,
  });
};

export function deleteMember(id) {
  return fetch({
    url: `api/users/${id}`,
    method: 'delete',
  });
};
