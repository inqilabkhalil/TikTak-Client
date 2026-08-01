import { create } from "zustand";
import { AxiosError } from "axios";
import { checkoutService } from "@/features/checkout/services";
import type { CheckoutState } from "@/features/checkout/types";

export const useCheckoutStore = create<CheckoutState>((set) => ({
  order: null,
  isLoading: false,
  error: null,

  createOrder: async (payload) => {
    set({ isLoading: true, error: null });
    try {
      const response = await checkoutService.createOrder(payload);
      set({ order: response.data, isLoading: false });
      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError<{ message?: string }>;
      const message =
        axiosError.response?.data?.message ||
        "Sifariş yaradılmadı, yenidən cəhd edin";
      set({ error: message, isLoading: false });
      return null;
    }
  },
  resetOrder: () => set({ order: null, error: null, isLoading: false }),
}));
