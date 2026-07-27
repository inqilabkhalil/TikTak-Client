'use client';

import type { StaticImageData } from 'next/image';
import apple from '@/shared/assets/alma.png';
import { ProductCard } from '../Products/ProductCard';
import styles from './ProductsGrid.module.css';

interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
}

const products: ProductItem[] = [
  {
    id: 1,
    title: 'Qırmızı alma',
    price: 3.3,
    image: apple,
  },
  {
    id: 2,
    title: 'Yaşıl alma',
    price: 4,
    image: apple,
  },
  {
    id: 3,
    title: 'Golden alma',
    price: 5,
    image: apple,
  },
];

export const ProductsGrid = () => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};
