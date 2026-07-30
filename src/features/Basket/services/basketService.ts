import api from "@/shared/services/api";
import {
  BasketApiResponse,
  BasketServiceResponse,
} from "../types/basket.types";
import { adaptBasketItems } from "../utils/basketAdapter";

const transformResponse = (response: {
  data: BasketApiResponse;
}): BasketServiceResponse => {
  const { items, total, count } = response.data.data;
  return {
    items: adaptBasketItems(items),
    total: parseFloat(total),
    count,
  };
};

export const basketService = {

  getBasket: async (): Promise<BasketServiceResponse> => {
    const response = await api.get<BasketApiResponse>("/basket");
    return transformResponse(response);
  },

  addItem: async (productId: number): Promise<BasketServiceResponse> => {
    const response = await api.post<BasketApiResponse>(
      `/basket/${productId}/add`
    );
    return transformResponse(response);
  },

  decreaseItem: async (productId: number): Promise<BasketServiceResponse> => {
    const response = await api.post<BasketApiResponse>(
      `/basket/${productId}/remove`
    );
    return transformResponse(response);
  },

  removeItem: async (productId: number): Promise<BasketServiceResponse> => {
    const response = await api.delete<BasketApiResponse>(
      `/basket/${productId}/remove`
    );
    return transformResponse(response);
  },


  clearBasket: async (): Promise<BasketServiceResponse> => {
    const response = await api.delete<BasketApiResponse>("/basket/clear");
    return transformResponse(response);
  },
};