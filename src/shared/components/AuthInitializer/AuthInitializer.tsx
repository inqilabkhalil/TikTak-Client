"use client";

import { useEffect } from "react";
import { useProfileStore } from "@/shared/store/profileStore";
import { useAuthStore } from "@/features/auth/store";
import { STORAGE_KEYS } from "@/features/auth/constants";
import { AuthInitializerProps } from "@/shared/types";

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return match ? match[2] : null;
};

export const AuthInitializer = ({ children }: AuthInitializerProps) => {
  const fetchProfile = useProfileStore((state) => state.fetchProfile);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    const localToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    const cookieToken = getCookie(STORAGE_KEYS.ACCESS_TOKEN);

    if ((!localToken && cookieToken) || (localToken && !cookieToken)) {
      logout();
      useProfileStore.setState({ isInitialized: true });
      return;
    }

    fetchProfile();
  }, [fetchProfile, logout]);

  useEffect(() => {
    const interval = setInterval(() => {
      const localToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
      const cookieToken = getCookie(STORAGE_KEYS.ACCESS_TOKEN);
      const currentUser = useProfileStore.getState().user;

      if (!localToken && currentUser) {
        logout();
        window.location.href = "/login";
        return;
      }

      if ((!localToken && cookieToken) || (localToken && !cookieToken)) {
        logout();
        window.location.href = "/login";
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [logout]);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEYS.ACCESS_TOKEN && !e.newValue) {
        logout();
        window.location.href = "/login";
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [logout]);

  return <>{children}</>;
};