import axios from 'axios';
import { getCookie, removeCookie } from '@/features/auth/utils';
import { ROUTES } from '@/shared/constants';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Hər sorğuda avtomatik token əlavə edir
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = getCookie('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Token vaxtı bitəndə (401) avtomatik logout edir — LOGIN sorğularını istisna edir
// Token heç olmayıbsa (qonaq istifadəçi) redirect etmir, sadəcə reject edir
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== 'undefined') {
      const isAuthEndpoint = error.config?.url?.includes('/auth/login');
      const hadToken = Boolean(getCookie('access_token'));

      if (error.response?.status === 401 && !isAuthEndpoint && hadToken) {
        removeCookie('access_token');
        removeCookie('refresh_token');
        window.location.href = ROUTES.LOGIN;
      }
    }
    return Promise.reject(error);
  },
);

export default api;
