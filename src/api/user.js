import request from '@/utils/request';

export function getUses() {
  return request({
    url: '/api/users?page=1',
    method: 'get',
  });
}
