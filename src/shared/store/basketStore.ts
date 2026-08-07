import { create } from "zustand";
import { isAxiosError } from "axios";
import { basketService } from "@/shared/services/basketService";
import { BASKET_MESSAGES } from "@/shared/constants/basket.constants";
import type { BasketState, BasketServiceResponse } from "@/shared/types/basket.types";

export const useBasketStore = create<BasketState>((set) => {
  const executeAction = async (
    action: () => Promise<BasketServiceResponse>,
    errorMessage: string,
  ) => {
    set({ isLoading: true, error: null });
    try {
      const data = await action();
      set({
        items: data.items,
        total: data.total,
        count: data.count,
        isLoading: false,
      });
    } catch (err: unknown) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message as string | undefined)
        : undefined;
      set({
        error: message ?? errorMessage,
        isLoading: false,
      });
    }
  };

  return {
    items: [],
    total: 0,
    count: 0,
    isLoading: false,
    error: null,

    fetchBasket: () =>
      executeAction(
        () => basketService.getBasket(),
        BASKET_MESSAGES.FETCH_ERROR,
      ),

    addItem: (productId) =>
      executeAction(
        () => basketService.addItem(productId),
        BASKET_MESSAGES.ADD_ERROR,
      ),

    decreaseItem: (productId) =>
      executeAction(
        () => basketService.decreaseItem(productId),
        BASKET_MESSAGES.DECREASE_ERROR,
      ),

    removeItem: (productId) =>
      executeAction(
        () => basketService.removeItem(productId),
        BASKET_MESSAGES.REMOVE_ERROR,
      ),

    clearBasket: () =>
      executeAction(
        () => basketService.clearBasket(),
        BASKET_MESSAGES.CLEAR_ERROR,
      ),

    clearError: () => set({ error: null }),
  };
});
