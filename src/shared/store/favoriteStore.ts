import { create } from 'zustand';
import { favoriteService } from '@/shared/services/favoriteService';
import { FAVORITE_MESSAGES } from '@/shared/constants/favorite.constants';
import { STORAGE_KEYS } from '@/features/auth/constants';
import type { FavoriteState } from '@/shared/types/favorite.types';

export const useFavorites = create<FavoriteState>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchFavorites: async () => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (!token) {
      set({ products: [] });
      return;
    }

    set({ isLoading: true, error: null });
    try {
      const products = await favoriteService.getFavorites();
      set({ products, isLoading: false });
    } catch (err: any) {
      set({
        error: err?.response?.data?.message ?? FAVORITE_MESSAGES.FETCH_ERROR,
        isLoading: false,
      });
    }
  },

  isFavorite: (id) => get().products.some((product) => product.id === id),

  toggleFavorite: async (id) => {
    set({ error: null });
    try {
      await favoriteService.toggleFavorite(id);
      await get().fetchFavorites();
    } catch (err: any) {
      set({
        error: err?.response?.data?.message ?? FAVORITE_MESSAGES.TOGGLE_ERROR,
      });
    }
  },
}));
