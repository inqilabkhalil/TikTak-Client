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

export interface UpdateProfilePayload {
  full_name?: string;
  phone?: string;
  email?: string;
  address?: string;
  password?: string;
  password_repeat?: string;
}

export interface ProfileResponse {
  message: string;
  data: User;
  result: boolean;
}

export interface ProfileState {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;

  fetchProfile: () => Promise<void>;
  setProfile: (user: User) => void;
  clearProfile: () => void;
}
