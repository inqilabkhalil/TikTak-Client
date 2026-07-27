'use client';

import { HeroBanner } from '@/features/Landig/components/HeroBanner/HeroBanner';
import styles from './LandigPage.module.css';

export const LandigPage = () => {
  return (
    <div className={styles.wrapper}>
      <HeroBanner />
    </div>
  );
};
