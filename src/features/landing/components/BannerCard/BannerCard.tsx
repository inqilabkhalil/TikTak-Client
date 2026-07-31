'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { isAuthenticated } from '@/shared/utils/auth';
import type { BannerCardProps } from '@/features/landing/types';
import styles from './BannerCard.module.css';

const subscribe = () => () => {};
const getServerSnapshot = () => false;

export const BannerCard = ({ banner }: BannerCardProps) => {
  const { title, subtitle, image, theme } = banner;
  const authed = useSyncExternalStore(subscribe, isAuthenticated, getServerSnapshot);
  const moreHref = authed ? '/' : '/login';

  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles.bgImage}
        priority
      />

      <div className={`${styles.overlay} ${styles[theme]}`} />

      <span className={styles.brandBadge}>TIK TAK</span>

      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <Link href={moreHref} className={styles.moreBtn}>
          Ətraflı
        </Link>
      </div>
    </div>
  );
};