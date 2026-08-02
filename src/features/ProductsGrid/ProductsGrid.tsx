import { ProductCard } from '../Products/ProductCard';
import { EmptyCategoryState } from './EmptyCategoryState/EmptyCategoryState';
import { getProductsByCategory } from '@/shared/data/catalog';
import styles from './ProductsGrid.module.css';

interface ProductsGridProps {
  categorySlug: string;
}

export const ProductsGrid = ({ categorySlug }: ProductsGridProps) => {
  const products = getProductsByCategory(categorySlug);

  if (products.length === 0) {
    return <EmptyCategoryState />;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
