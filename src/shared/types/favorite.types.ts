import type { Product } from '@/shared/types/product.types';

export interface FavoriteState {
  products: Product[];
  isLoading: boolean;
  error: string | null;

  fetchFavorites: () => Promise<void>;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => Promise<void>;
}
