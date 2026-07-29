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

// Response data (backend "data" qatı)
export interface LoginResponseData {
  tokens: AuthTokens;
  profile: User;
  result: boolean;
}

// Backend-in tam cavabı (xarici qat)
export interface LoginResponse {
  message: string;
  data: LoginResponseData;
}
export interface RegisterResponse {
  message: string;
  data: null;
  result: boolean;
}