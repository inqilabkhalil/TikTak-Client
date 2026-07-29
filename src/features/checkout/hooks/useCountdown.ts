'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { UseCountdownReturn } from '@/features/checkout/types';

export const useCountdown = (
  initialSeconds: number,
  onFinish?: () => void,
  isActive: boolean = true,
): UseCountdownReturn => {
  const [seconds, setSeconds] = useState(initialSeconds);

  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onFinishRef.current?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = useCallback((totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const reset = useCallback(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  return {
    formattedTime: formatTime(seconds),
    isFinished: seconds <= 0,
    seconds,
    reset,
  };
};
