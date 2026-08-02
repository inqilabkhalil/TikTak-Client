"use client";

import { useSuccessRedirect } from "@/features/checkout/hooks";
import styles from "./SuccessScreen.module.css";
import type { RedirectCountdownProps } from "@/features/checkout/types";
export const RedirectCountdown = ({
  redirectTo,
  duration = 5,
}: RedirectCountdownProps) => {
  const { secondsLeft } = useSuccessRedirect({ redirectTo, duration });

  return (
    <p className={styles.redirectInfo}>
      {secondsLeft} saniyəyə avtomatik yönləndiriləcəksiniz...
    </p>
  );
};