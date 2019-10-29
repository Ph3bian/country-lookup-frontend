import axios from 'axios'
import { getToken } from './functions'
const Axios = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
        'Content-Type': 'application/json'
    }
})
export default Axios

Axios.interceptors.request.use(
    config => {
      const token = getToken();
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );