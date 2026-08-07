'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/shared/components/Card';
import { AddToBasketControl } from '@/shared/components/AddToBasketControl';
import type { ProductCardProps } from '../../types';
import { formatPrice } from '@/shared/utils';
import styles from './ProductCard.module.css';

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, imgUrl, title, price } = product;
  const inStock = true;

  const hasImage = Boolean(imgUrl && imgUrl.length > 0);

  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <Link href={`/product/${id}`} className={styles.linkArea}>
          <div className={styles.imageWrapper}>
            {hasImage ? (
              <Image
                src={imgUrl}
                alt={title}
                className={styles.image}
                width={200}
                height={200}
              />
            ) : (
              <div className={styles.imagePlaceholder} />
            )}
          </div>

          <h3 className={styles.title}>{title}</h3>

          <p className={styles.price}>{formatPrice(price)}</p>
        </Link>

        {!inStock && <span className={styles.outOfStock}>Stokda yoxdur</span>}

        <AddToBasketControl
          id={id}
          image={hasImage ? imgUrl : ''}
          title={title}
          price={price}
          inStock={inStock}
          unitLabel="kq"
        />
      </div>
    </Card>
  );
};
