import axios from 'axios';
import { deleteSessionStorage, getSessionStorage } from 'helpers';

const client = axios.create({
  baseURL: 'https://api.imgur.com',
});

client.interceptors.request.use((config) => {
  const clientConfig = {
    ...config,
  };

  if (!getSessionStorage('client')) {
    const error = {
      status: 'error',
      message: 'Invalid Client-ID',
    };

    throw error;
  }

  clientConfig.headers.Authorization = `Client-ID ${getSessionStorage('client')}`;

  return clientConfig;
}, (error) => Promise.reject(error));

client.interceptors.response.use((response) => response, (err) => {
  const {
    data: {
      data: {
        error,
      },
    },
  } = err.response;

  deleteSessionStorage('client');

  return Promise.reject(error);
});

export default client;
