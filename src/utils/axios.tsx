import axios, { AxiosError } from 'axios';
import { notification } from 'antd';
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 60000,
});

const errorHandler = (error: AxiosError) => {
  notification.error({
    message: '请求失败',
    description: error.message,
  });
  return Promise.reject(error);
};

instance.interceptors.request.use(config => config, errorHandler);

instance.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
}, errorHandler);

export default instance;
