'use client';

import { useProfileStore } from '@/shared/store/profileStore';
import styles from './AddressDisplay.module.css';

export const AddressDisplay = () => {
  const isInitialized = useProfileStore((state) => state.isInitialized);
  const address = useProfileStore((state) => state.user?.address);

  if (!isInitialized) {
    return <span className={styles.skeleton} aria-hidden="true" />;
  }

  return <>{address || 'Unvan seçilməyib'}</>;
};
