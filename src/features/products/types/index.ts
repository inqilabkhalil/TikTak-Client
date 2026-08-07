import type { Product } from '@/shared/types/product.types';

export interface ProductCardProps {
  product: Product;
}

export interface ProductsGridProps {
  categorySlug: string;
  products: Product[];
}
