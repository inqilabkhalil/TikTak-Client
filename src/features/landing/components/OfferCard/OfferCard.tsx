import Image from 'next/image';
import Link from 'next/link';
import type { OfferCardProps } from '@/features/landing/types';
import styles from './OfferCard.module.css';

export const OfferCard = ({ offer }: OfferCardProps) => {
  const { title, date, image, href } = offer;

  return (
    <Link href={href} className={styles.card}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles.bgImage}
      />

      <div className={styles.overlay} />

      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </Link>
  );
};
