import api from '@/shared/services/api';
import { ProductListApiResponse, Product } from '@/shared/types/product.types';
import { adaptProducts } from '@/shared/utils/productAdapter';

export const productService = {
  getProducts: async (token?: string): Promise<Product[]> => {
    const response = await api.get<ProductListApiResponse>('/products', {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return adaptProducts(response.data.data);
  },
};
