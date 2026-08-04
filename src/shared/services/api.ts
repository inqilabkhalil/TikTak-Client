    import axios from 'axios';
    import { ROUTES } from '@/shared/constants';

    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });

    // Hər sorğuda avtomatik token əlavə edir
 api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");


  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
console.log(token);


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
