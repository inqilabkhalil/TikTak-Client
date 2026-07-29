import Image from 'next/image';
import { AuthAwareLink } from '@/shared/components/AuthAwareLink';
import type { BannerCardProps } from '@/features/landing/types';
import styles from './BannerCard.module.css';

export const BannerCard = ({ banner }: BannerCardProps) => {
  const { title, subtitle, image, theme } = banner;

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
        <AuthAwareLink className={styles.moreBtn}>Ətraflı</AuthAwareLink>
      </div>
    </div>
  );
};
