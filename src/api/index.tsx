import request from '@/utils/axios';

const Api = {
  cookie: '',
};

export const getCookies = () => request<string>({
  url: Api.cookie,
  method: 'GET',
});
