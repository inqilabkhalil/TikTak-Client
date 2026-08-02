'use client';

import Image from 'next/image';
import { Card } from '@/shared/components/Card';
import { AddToBasketControl } from '@/shared/components/AddToBasketControl';
import { formatPrice } from '@/shared/utils';
import styles from './FavoriteCard.module.css';

interface FavoriteCardProps {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  className?: string;
}

export const FavoriteCard = ({ id, title, price, imgUrl, className }: FavoriteCardProps) => {
  const hasImage = Boolean(imgUrl);

  return (
    <Card className={className}>
      <div className={styles.content}>
        <div className={styles.image}>
          {hasImage ? (
            <Image src={imgUrl} alt={title} width={80} height={80} className={styles.imageEl} />
          ) : (
            <div className={styles.imageEl} />
          )}
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.price}>{formatPrice(price)}</p>

        <AddToBasketControl
          id={id}
          image={imgUrl}
          title={title}
          price={price}
          inStock
          unitLabel="kq"
        />
      </div>
    </Card>
  );
};
