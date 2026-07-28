'use client';

import Image from 'next/image';
import type { StatCardProps } from '@/Features/landing/types';
import { useCountUp } from '@/Features/landing/hooks/useCountUp';
import styles from './StatCard.module.css';

export const StatCard = ({ stat }: StatCardProps) => {
  const { value, label, icon } = stat;
  const { ref, display } = useCountUp(value);

  return (
    <div className={styles.card}>
      <span ref={ref} className={styles.value}>
        {display}
      </span>
      <div className={styles.bottom}>
        <span className={styles.label}>{label}</span>
        <Image src={icon} alt="" className={styles.icon} />
      </div>
    </div>
  );
};
