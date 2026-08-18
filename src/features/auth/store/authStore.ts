import axios from "axios";
import { create } from "zustand";
import { authService } from "@/features/auth/services";
import { setCookie, removeCookie } from "@/features/auth/utils";
import { STORAGE_KEYS, AUTH_MESSAGES } from "@/features/auth/constants";
import { useProfileStore } from "@/shared/store/profileStore";
import type { AuthState } from "@/features/auth/types/authType";

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  error: null,

  login: async (values) => {
    set({ isLoading: true, error: null });

    try {
      const data = await authService.login(values);
      const { access_token, refresh_token } = data.tokens;

      setCookie(STORAGE_KEYS.ACCESS_TOKEN, access_token);
      setCookie(STORAGE_KEYS.REFRESH_TOKEN, refresh_token);

      useProfileStore.getState().setProfile(data.profile);
      set({ isLoading: false });
      return true;
    } catch (err: unknown) {
      const errorMessage = axios.isAxiosError(err)
        ? ((err.response?.data as { message?: string } | undefined)?.message ??
          AUTH_MESSAGES.DEFAULT_ERROR)
        : AUTH_MESSAGES.DEFAULT_ERROR;

      set({
        error: errorMessage,
        isLoading: false,
      });
      return false;
    }
  },

  register: async (values) => {
    set({ isLoading: true, error: null });

    try {
      await authService.register(values);
      set({ isLoading: false });
      return true;
    } catch (err: unknown) {
      const errorMessage = axios.isAxiosError(err)
        ? ((err.response?.data as { message?: string } | undefined)?.message ??
          AUTH_MESSAGES.DEFAULT_ERROR)
        : AUTH_MESSAGES.DEFAULT_ERROR;

      set({
        error: errorMessage,
        isLoading: false,
      });
      return false;
    }
  },

  logout: () => {
    removeCookie(STORAGE_KEYS.ACCESS_TOKEN);
    removeCookie(STORAGE_KEYS.REFRESH_TOKEN);
    useProfileStore.getState().clearProfile();
    set({ error: null });
  },

  clearError: () => set({ error: null }),
}));