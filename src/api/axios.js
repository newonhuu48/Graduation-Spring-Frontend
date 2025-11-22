import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://16.171.242.4:8080', // Backend Spring is here
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
