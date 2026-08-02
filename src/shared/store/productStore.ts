import axios from 'axios';
import { create } from 'zustand';
import { productService } from '@/shared/services/productService';
import { PRODUCT_MESSAGES } from '@/shared/constants/product.constants';
import type { ProductState } from '@/shared/types/product.types';

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const products = await productService.getProducts();
      set({ products, isLoading: false });
    } catch (err: unknown) {
      const message = axios.isAxiosError(err)
        ? ((err.response?.data as { message?: string } | undefined)?.message ?? PRODUCT_MESSAGES.FETCH_ERROR)
        : PRODUCT_MESSAGES.FETCH_ERROR;

      set({ error: message, isLoading: false });
    }
  },

  getProductsByCategory: (categoryId: number) =>
    get().products.filter((p) => p.categoryId === categoryId),

  getProductById: (id: number) => get().products.find((p) => p.id === id),
}));
