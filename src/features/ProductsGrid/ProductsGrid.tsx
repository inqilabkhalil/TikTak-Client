'use client';

import { useEffect } from 'react';
import { ProductCard } from '../Products/ProductCard';
import { EmptyCategoryState } from './EmptyCategoryState/EmptyCategoryState';
import { useProductStore } from '@/shared/store';
import styles from './ProductsGrid.module.css';

interface ProductsGridProps {
  categorySlug: string; // artıq id kimi istifadə olunur
}

export const ProductsGrid = ({ categorySlug }: ProductsGridProps) => {
  const products = useProductStore((s) => s.products);
  const fetchProducts = useProductStore((s) => s.fetchProducts);
  const isLoading = useProductStore((s) => s.isLoading);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const categoryProducts = products.filter(
    (p) => p.categoryId === Number(categorySlug),
  );

  if (isLoading) return null;

  if (categoryProducts.length === 0) {
    return <EmptyCategoryState />;
  }

  return (
    <div className={styles.grid}>
      {categoryProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
