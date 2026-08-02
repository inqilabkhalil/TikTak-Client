  import axios from 'axios';
  import { ROUTES } from '@/shared/constants';

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  // Hər sorğuda avtomatik token əlavə edir
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5OTQ1MTY2Njc3NjYiLCJzdWIiOjk3LCJpYXQiOjE3ODU2NzM2NzQsImV4cCI6MTc4NTcxNjg3NH0.hdNWINPosasxQ06fw3bWyKNrlN1l58vaw63n70J0-yE');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Token vaxtı bitəndə (401) avtomatik logout edir — LOGIN sorğularını istisna edir
  // Token heç olmayıbsa (qonaq istifadəçi) redirect etmir, sadəcə reject edir
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const isAuthEndpoint = error.config?.url?.includes('/auth/login');
      const hadToken = Boolean(localStorage.getItem('access_token'));

      if (error.response?.status === 401 && !isAuthEndpoint && hadToken) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = ROUTES.LOGIN;
      }
      return Promise.reject(error);
    },
  );

  export default api;
