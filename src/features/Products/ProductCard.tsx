'use client';

import Image, { type StaticImageData } from 'next/image';
import { Card } from '@/shared/components/Card';
import { Button } from '@/shared/components/Button';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  image: StaticImageData;
  title: string;
  price: number;
}

export const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <Card>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} className={styles.image} />
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.price}>{price} ₼</p>

        <Button className={styles.button}>Səbətə əlavə et</Button>
      </div>
    </Card>
  );
};
