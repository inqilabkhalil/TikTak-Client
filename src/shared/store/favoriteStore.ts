import axios from 'axios';
import { create } from 'zustand';
import { favoriteService } from '@/shared/services/favoriteService';
import { getCookie } from '@/features/auth/utils';
import { FAVORITE_MESSAGES } from '@/shared/constants/favorite.constants';
import { STORAGE_KEYS } from '@/features/auth/constants';
import type { FavoriteState } from '@/shared/types/favorite.types';

export const useFavorites = create<FavoriteState>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchFavorites: async () => {
    const token = getCookie(STORAGE_KEYS.ACCESS_TOKEN);
    if (!token) {
      set({ products: [] });
      return;
    }

    set({ isLoading: true, error: null });
    try {
      const products = await favoriteService.getFavorites();
      set({ products, isLoading: false });
    } catch (err: unknown) {
      const message = axios.isAxiosError(err)
        ? ((err.response?.data as { message?: string } | undefined)?.message ?? FAVORITE_MESSAGES.FETCH_ERROR)
        : FAVORITE_MESSAGES.FETCH_ERROR;

      set({ error: message, isLoading: false });
    }
  },

  isFavorite: (id) => get().products.some((product) => product.id === id),

  toggleFavorite: async (id) => {
    set({ error: null });
    try {
      await favoriteService.toggleFavorite(id);
      await get().fetchFavorites();
    } catch (err: unknown) {
      const message = axios.isAxiosError(err)
        ? ((err.response?.data as { message?: string } | undefined)?.message ?? FAVORITE_MESSAGES.TOGGLE_ERROR)
        : FAVORITE_MESSAGES.TOGGLE_ERROR;

      set({ error: message });
    }
  },
}));
