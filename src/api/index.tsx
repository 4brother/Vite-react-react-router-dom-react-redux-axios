import request from '@/utils/axios';

const Api = {
  cookie: '',
};

export const getCookies = () => request({
  url: Api.cookie,
  method: 'GET',
});
