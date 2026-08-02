import { LoginResponse, LoginResponseData, LoginValues, ProfileResponse, RegisterResponse, RegisterValues,User } from "@/features/auth/types/authType";
import api from "@/shared/services/api";

export const authService = {
    login: async (data: LoginValues): Promise<LoginResponseData> => {
        const response = await api.post<LoginResponse>("/auth/login", data);
        return response.data.data;
    },

    register: async (data: RegisterValues): Promise<RegisterResponse> => {
    const response = await api.post<RegisterResponse>("/auth/signup", data);
    return response.data;
  },

    getProfile: async (): Promise<User> => {
     const response = await api.get<ProfileResponse>("/profile");
     return response.data.data;
  },
}
