import { api } from '@/shared/services';
import { UserProfile } from '../types';

export const userService = {
  // Cari istifadəçi məlumatlarını gətirmək üçün
  async getProfile(): Promise<UserProfile> {
    const response = await api.get('https://api.sarkhanrahimli.dev  /api/tiktak/profile'); // Backend-dəki profil endpoint-i
    return response.data;
  },

  // Ad, soyad və ya şifrəni yeniləmək üçün
  async updateProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    const response = await api.put('https://api.sarkhanrahimli.dev/api/tiktak/profile', data); // Backend-dəki yeniləmə endpoint-i
    return response.data;
  },
};