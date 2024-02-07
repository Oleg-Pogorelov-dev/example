import axios, { InternalAxiosRequestConfig } from 'axios';
import { API_URL } from '../variables';
import { errorHandler } from '../functions';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    return config;
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data?.code === 'E026') {
      throw new Error('400');
    }
    return errorHandler(error);
  }
);
