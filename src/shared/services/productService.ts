import api from '@/shared/services/api';
import { ProductListApiResponse, Product } from '@/shared/types/product.types';
import { adaptProducts } from '@/shared/utils/productAdapter';

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    const response = await api.get<ProductListApiResponse>('/products');
    return adaptProducts(response.data.data);
  },
};
