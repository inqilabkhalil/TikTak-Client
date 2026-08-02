'use client';

import Image, { type StaticImageData } from 'next/image';
import { Card } from '@/shared/components/Card';
import { AddToBasketControl } from '@/shared/components/AddToBasketControl';
import { formatPrice } from '@/shared/utils';
import styles from './FavoriteCard.module.css';

interface FavoriteCardProps {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
  className?: string;
}

export const FavoriteCard = ({ id, title, price, image, className }: FavoriteCardProps) => {
  return (
    <Card className={className}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={image} alt={title} width={80} height={80} className={styles.imageEl} />
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.price}>{formatPrice(price)}</p>

        <AddToBasketControl
          id={id}
          image={image.src}
          title={title}
          price={price}
          inStock
          unitLabel="kq"
        />
      </div>
    </Card>
  );
};
