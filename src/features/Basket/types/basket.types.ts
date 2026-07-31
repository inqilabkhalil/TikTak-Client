// ==================== API TYPES ====================

export interface BasketProduct {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface BasketApiProduct {
  id: number;
  title: string;
  img_url: string;
  description: string;
  price: string;
  type: string;
  created_at: string;
  category?: {
    id: number;
    name: string;
    img_url: string;
    description: string;
    created_at: string;
  };
}

export interface BasketApiItem {
  id: number;
  quantity: number;
  total_price: string;
  product: BasketApiProduct;
}

export interface BasketApiData {
  items: BasketApiItem[];
  total: string;
  count: number;
}

export interface BasketApiResponse {
  message: string;
  data: BasketApiData;
  result: boolean;
}

export interface NewBasketProduct {
  name: string;
  price: number;
  image: string;
}

export interface BasketState {
  items: BasketProduct[];
  total: number;
  count: number;
  isLoading: boolean;
  error: string | null;

  fetchBasket: () => void;
  addItem: (productId: number, product?: NewBasketProduct) => void;
  decreaseItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearBasket: () => void;
  clearError: () => void;
}

export interface BasketServiceResponse {
  items: BasketProduct[];
  total: number;
  count: number;
}
