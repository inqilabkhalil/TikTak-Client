import api from '@/shared/services/api';
import type { ProductListApiResponse, Product } from '@/shared/types/product.types';
import { adaptProducts } from '@/shared/utils/productAdapter';

export const favoriteService = {
  getFavorites: async (): Promise<Product[]> => {
    const response = await api.get<ProductListApiResponse>('/products/favorites');
    return adaptProducts(response.data.data);
  },

  toggleFavorite: async (productId: number): Promise<void> => {
    await api.post(`/products/${productId}/favorite`);
  },
};
