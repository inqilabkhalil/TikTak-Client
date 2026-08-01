"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useCountdown } from "./useCountdown";
import type {
  UseSuccessRedirectProps,
  UseSuccessRedirectReturn,
} from "@/features/checkout/types";

export const useSuccessRedirect = ({
  redirectTo,
  duration = 5,
}: UseSuccessRedirectProps): UseSuccessRedirectReturn => {
  const router = useRouter();

  const handleRedirect = useCallback(() => {
    if (redirectTo) {
      setTimeout(() => {
        router.push(redirectTo);
      }, 0);
    }
  }, [router, redirectTo]);

  const { seconds } = useCountdown(
    duration,
    handleRedirect,
    Boolean(redirectTo)
  );

  return {
    secondsLeft: seconds,
  };
};