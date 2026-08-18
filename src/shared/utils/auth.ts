import { getCookie } from "@/features/auth/utils";

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  const token = getCookie("access_token");
  return Boolean(token);
};