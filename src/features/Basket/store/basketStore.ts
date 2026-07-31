import { create } from "zustand";
import type { BasketProduct, BasketState } from "../types/basket.types";

const STORAGE_KEY = "tiktak:basket";

const loadItems = (): BasketProduct[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const persistItems = (items: BasketProduct[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

const computeTotals = (items: BasketProduct[]) => ({
  total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  count: items.reduce((sum, item) => sum + item.quantity, 0),
});

export const useBasketStore = create<BasketState>((set) => {
  return {
    items: [],
    total: 0,
    count: 0,
    isLoading: false,
    error: null,

    fetchBasket: () => {
      const items = loadItems();
      set({ items, ...computeTotals(items), isLoading: false, error: null });
    },

    addItem: (productId, product) =>
      set((state) => {
        const existing = state.items.find((item) => item.productId === productId);

        let items: BasketProduct[];
        if (existing) {
          items = state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else if (product) {
          items = [
            ...state.items,
            {
              id: productId,
              productId,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1,
            },
          ];
        } else {
          items = state.items;
        }

        persistItems(items);
        return { items, ...computeTotals(items) };
      }),

    decreaseItem: (productId) =>
      set((state) => {
        const items = state.items
          .map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);

        persistItems(items);
        return { items, ...computeTotals(items) };
      }),

    removeItem: (productId) =>
      set((state) => {
        const items = state.items.filter((item) => item.productId !== productId);
        persistItems(items);
        return { items, ...computeTotals(items) };
      }),

    clearBasket: () => {
      persistItems([]);
      set({ items: [], total: 0, count: 0 });
    },

    clearError: () => set({ error: null }),
  };
});
