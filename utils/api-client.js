import axios from 'axios';

const apiClient = axios.create({
  baseURL: `http://lumen-ecommerce-website.test/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to automatically include Bearer token in headers
apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export default apiClient;
