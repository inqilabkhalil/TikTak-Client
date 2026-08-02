import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoritesState = {
  ids: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
  clearFavorites: () => void;
};

export const useFavorites = create<FavoritesState>()(
  persist(
    (set, get) => ({
      ids: [],

      isFavorite: (id) => get().ids.includes(id),

      toggleFavorite: (id) =>
        set((state) => ({
          ids: state.ids.includes(id)
            ? state.ids.filter((existingId) => existingId !== id)
            : [...state.ids, id],
        })),

      clearFavorites: () => set({ ids: [] }),
    }),
    {
      name: 'tiktak:favorites',
      partialize: (state) => ({ ids: state.ids }),
    },
  ),
);
