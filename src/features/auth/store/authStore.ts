import axios from "axios";
import { create } from "zustand";
import { authService } from "@/features/auth/services";
import { setCookie, removeCookie } from "@/features/auth/utils";
import { STORAGE_KEYS, AUTH_MESSAGES } from "@/features/auth/constants";
import type { AuthState } from "@/features/auth/types/authType";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  isInitialized: false,
  error: null,

  login: async (values) => {
    set({ isLoading: true, error: null });

    try {
      const data = await authService.login(values);
      const { access_token, refresh_token } = data.tokens;

      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, access_token);
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refresh_token);
      setCookie(STORAGE_KEYS.ACCESS_TOKEN, access_token);

      set({ user: data.profile, isLoading: false, isInitialized: true });
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

  fetchProfile: async () => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (!token) {
      set({ isInitialized: true });
      return;
    }

    try {
      const user = await authService.getProfile();
      set({ user, isInitialized: true });
    } catch {
      set({ user: null, isInitialized: true });
    }
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    removeCookie(STORAGE_KEYS.ACCESS_TOKEN);
    set({ user: null, error: null });
  },

  clearError: () => set({ error: null }),
}));