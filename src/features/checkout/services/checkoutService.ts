import { api } from "@/shared/services";
import { CheckoutRequest, CheckoutResponse } from "../types";


export const checkoutService = {
  createOrder: async (payload: CheckoutRequest): Promise<CheckoutResponse> => {
    const { data } = await api.post<CheckoutResponse>(
        "/orders/checkout",
        payload
    );
    return data;
  }
}
