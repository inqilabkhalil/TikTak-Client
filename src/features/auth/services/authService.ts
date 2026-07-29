import { LoginResponse, LoginResponseData, LoginValues, RegisterResponse, RegisterValues } from "@/features/auth/types/authType";
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
}
