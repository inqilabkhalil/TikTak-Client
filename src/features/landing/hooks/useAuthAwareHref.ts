'use client';

import { useSyncExternalStore } from 'react';
import { isAuthenticated } from '@/shared/utils/auth';

const subscribe = () => () => {};
const getServerSnapshot = () => false;

export const useAuthAwareHref = () => {
  const authed = useSyncExternalStore(subscribe, isAuthenticated, getServerSnapshot);
  return authed ? '/' : '/login';
};
