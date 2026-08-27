'use client';

import { useSyncExternalStore } from 'react';
import { isAuthenticated } from '@/shared/utils/auth';
import { ROUTES } from '@/shared/constants';

const subscribe = () => () => {};
const getServerSnapshot = () => false;

export const useAuthAwareHref = () => {
  const authed = useSyncExternalStore(subscribe, isAuthenticated, getServerSnapshot);
  return authed ? ROUTES.CATEGORY : ROUTES.LOGIN;
};
