'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/shared/components/Card';
import { AddToBasketControl } from '@/shared/components/AddToBasketControl';
import type { Product } from '@/shared/data/catalog';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, image, title, price, inStock } = product;

  return (
    <Card>
      <div className={styles.content}>
        <Link href={`/product/${id}`} className={styles.linkArea}>
          <div className={styles.imageWrapper}>
            <Image src={image} alt={title} className={styles.image} />
          </div>

          <h3 className={styles.title}>{title}</h3>

          <p className={styles.price}>{price} AZN</p>

          {!inStock && <p className={styles.outOfStock}>Stokda yoxdur</p>}
        </Link>

        <AddToBasketControl
          id={id}
          image={image.src}
          title={title}
          price={price}
          inStock={inStock}
          unitLabel="kq"
        />
      </div>
    </Card>
  );
};
