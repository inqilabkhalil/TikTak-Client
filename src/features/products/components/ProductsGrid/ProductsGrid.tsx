import { ProductCard } from '../ProductCard';
import { EmptyCategoryState } from '../EmptyCategoryState';
import type { ProductsGridProps } from '../../types';
import styles from './ProductsGrid.module.css';

export const ProductsGrid = ({ categorySlug, products }: ProductsGridProps) => {
  const categoryProducts = products.filter(
    (p) => p.categoryId === Number(categorySlug),
  );

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
