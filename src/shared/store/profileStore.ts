import { create } from 'zustand';
import { profileService } from '@/shared/services/profileService';
import { getCookie } from '@/features/auth/utils';
import { STORAGE_KEYS } from '@/features/auth/constants';
import type { ProfileState, User } from '@/shared/types/profile.types';

export const useProfileStore = create<ProfileState>((set) => ({
  user: null,
  isLoading: false,
  isInitialized: false,
  error: null,

  fetchProfile: async () => {
    const token = getCookie(STORAGE_KEYS.ACCESS_TOKEN);

    if (!token) {
      set({ isInitialized: true });
      return;
    }

    set({ isLoading: true });
    try {
      const user = await profileService.getProfile();
      set({ user, isLoading: false, isInitialized: true });
    } catch {
      set({ user: null, isLoading: false, isInitialized: true });
    }
  },

  setProfile: (user: User) => set({ user, isInitialized: true }),

  clearProfile: () => set({ user: null, error: null }),
}));
