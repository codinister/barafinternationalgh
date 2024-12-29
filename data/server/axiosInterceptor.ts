'use client'


import axios from 'axios';

const fetchapi = axios.create({
  baseURL: '/api',
});

const axiosInterceptor = ({ ...obj }) => {
  fetchapi.defaults.headers.common.Authorization = '';

  return fetchapi(obj)
    .then((resp) => resp)
    .catch((err) => err.response);
};

export default axiosInterceptor;
