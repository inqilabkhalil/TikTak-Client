"use client";

import { useEffect } from "react";
import { useProfileStore } from "@/shared/store/profileStore";
import { useAuthStore } from "@/features/auth/store";
import { getCookie } from "@/features/auth/utils";
import { STORAGE_KEYS } from "@/features/auth/constants";
import { AuthInitializerProps } from "@/shared/types";

export const AuthInitializer = ({ children }: AuthInitializerProps) => {
  const fetchProfile = useProfileStore((state) => state.fetchProfile);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    const cookieToken = getCookie(STORAGE_KEYS.ACCESS_TOKEN);

    if (!cookieToken) {
      useProfileStore.setState({ isInitialized: true });
      return;
    }

    fetchProfile();
  }, [fetchProfile, logout]);

  useEffect(() => {
    const interval = setInterval(() => {
      const cookieToken = getCookie(STORAGE_KEYS.ACCESS_TOKEN);
      const currentUser = useProfileStore.getState().user;

      if (!cookieToken && currentUser) {
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