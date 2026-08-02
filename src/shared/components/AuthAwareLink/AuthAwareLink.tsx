"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { isAuthenticated } from "@/shared/utils/auth";

export interface AuthAwareLinkProps {
  className?: string;
  children: ReactNode;
}

export const AuthAwareLink = ({ className, children }: AuthAwareLinkProps) => {
  const targetHref = isAuthenticated() ? "/" : "/login";

  return (
    <Link href={targetHref} className={className}>
      {children}
    </Link>
  );
};