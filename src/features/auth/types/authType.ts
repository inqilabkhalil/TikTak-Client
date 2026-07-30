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


export interface User {
  id: number;
  full_name: string;
  phone: string;
  email: string | null;
  address: string | null;
  img_url: string | null;
  role: string;
  created_at: string;
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

// STORE TYPE
export interface AuthState {
  user: User | null;
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