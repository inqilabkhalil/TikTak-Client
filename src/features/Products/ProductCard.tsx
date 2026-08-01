'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';
import { Card } from '@/shared/components/Card';
import { AddToBasketControl } from '@/shared/components/AddToBasketControl';
import type { Product } from '@/shared/data/catalog';
import { useFavorites } from '@/shared/store';
import { formatPrice } from '@/shared/utils';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, image, title, price, inStock } = product;
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(id);

  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <button
          type="button"
          className={styles.favoriteBtn}
          aria-label="Sevimlilərə əlavə et"
          aria-pressed={favorite}
          onClick={() => toggleFavorite(id)}
        >
          <FiHeart className={favorite ? styles.favoriteActive : undefined} />
        </button>

        <Link href={`/product/${id}`} className={styles.linkArea}>
          <div className={styles.imageWrapper}>
            <Image src={image} alt={title} className={styles.image} />
          </div>

          <h3 className={styles.title}>{title}</h3>

          <p className={styles.price}>{formatPrice(price)}</p>
        </Link>

        {!inStock && <span className={styles.outOfStock}>Stokda yoxdur</span>}

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
