import axios, { AxiosError, AxiosResponse } from 'axios';
import { debounce, get } from 'lodash';
import { toast } from 'react-toastify';

const debouncedToastError = debounce(toast.error, 250);

// Set Base URL and Defaults
axios.defaults.baseURL = import.meta.env.VITE_WS_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Response Interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const errorMessage: any = get(error, 'response.data.errors[0].message') || get(error, 'response.data.message');
    const errorCode = error?.response?.status;

    if (errorCode === 400) {
      debouncedToastError(errorMessage || 'Bad Request!');
    } else if (errorCode === 401) {
      debouncedToastError(errorMessage || 'Unauthorized');
      window.location.href = '/';
    } else if (errorCode === 422) {
      debouncedToastError(errorMessage || 'Unprocessable Entity!');
    } else if (errorCode === 500) {
      debouncedToastError('Internal Server Error!');
    } else {
      debouncedToastError('Unable to connect to web service');
    }

    return Promise.reject(error);
  }
);
