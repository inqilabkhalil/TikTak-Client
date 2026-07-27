'use client';

import { useEffect, useState } from 'react';
import type { UseCountdownReturn } from '@/Features/checkout/types';

export const useCountdown = (
  initialSeconds: number,
  onFinish?: () => void,
  isActive: boolean = true,
): UseCountdownReturn => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (!isActive) return;

    if (seconds <= 0) {
      onFinish?.();
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, onFinish, isActive]);

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const reset = () => {
    setSeconds(initialSeconds);
  };

  return {
    formattedTime: formatTime(seconds),
    isFinished: seconds <= 0,
    seconds,
    reset,
  };
};
