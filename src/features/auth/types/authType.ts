import type { User } from "@/shared/types/profile.types";

export interface LoginValues {
  phone: string;
  password: string;
}

export interface RegisterValues {
  full_name: string;
  phone: string;
  password: string;
}

export interface AuthTabsProps {
  active: "login" | "register";
}

// Token pair
export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

// Response data
export interface LoginResponseData {
  tokens: AuthTokens;
  profile: User;
  result: boolean;
}

// Backend-in tam cavabı
export interface LoginResponse {
  message: string;
  data: LoginResponseData;
}
export interface RegisterResponse {
  message: string;
  data: null;
  result: boolean;
}

// STORE TYPE — yalnız token/auth vəziyyəti, profil datası shared/store/profileStore.ts-dədir
export interface AuthState {
  isLoading: boolean;
  error: string | null;

  login: (values: LoginValues) => Promise<boolean>;
  register: (values: RegisterValues) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}

export interface PhoneFieldProps {
  label?: string;
  error?: string;
  touched?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  status?: "error" | undefined;
}