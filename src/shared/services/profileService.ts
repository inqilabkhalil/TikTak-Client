import api from "@/shared/services/api";
import type { ProfileResponse, User, UpdateProfilePayload } from "@/shared/types/profile.types";

export const profileService = {
  getProfile: async (): Promise<User> => {
    const response = await api.get<ProfileResponse>("/profile");
    return response.data.data;
  },

  updateProfile: async (data: UpdateProfilePayload) => {
    const response = await api.put<ProfileResponse>("/profile", data);
    return response.data.data;
  },
};
