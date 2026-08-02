"use client";

import { useEffect } from "react";
import { useProfileStore } from "@/shared/store/profileStore";

interface AuthInitializerProps {
  children: React.ReactNode;
}

export const AuthInitializer = ({ children }: AuthInitializerProps) => {
  const fetchProfile = useProfileStore((state) => state.fetchProfile);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return <>{children}</>;
};