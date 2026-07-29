import { create } from "zustand";
import { authService } from "@/features/auth/services";
import type {
  LoginValues,
  RegisterValues,
  User,
} from "@/features/auth/types/authType";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;

  login: (values: LoginValues) => Promise<boolean>;
  register: (values: RegisterValues) => Promise<boolean>;
  logout: () => void;
  clearError: () => void; 
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  login: async (values) => {
    set({ isLoading: true, error: null });
    try {
      const data = await authService.login(values);

      localStorage.setItem("access_token", data.tokens.access_token);
      localStorage.setItem("refresh_token", data.tokens.refresh_token);

      set({ user: data.profile, isLoading: false });
      return true;
    } catch (err: any) {
      set({
        error: err?.response?.data?.message ?? "Xəta baş verdi",
        isLoading: false,
      });
      return false;
    }
  },

// Signup token/profile qaytarmır — sadəcə uğur/uğursuzluq
  register: async (values) => {
    set({ isLoading: true, error: null });
    try {
      await authService.register(values);
      set({ isLoading: false });
      return true;
    } catch (err: any) {
      const message = err?.response?.data?.message ?? "Xəta baş verdi";
      set({
        error: message,
        isLoading: false,
      });
      return false;
    }
  },
  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    set({ user: null, error: null });
  },
  clearError: () => set({ error:null}),
}));