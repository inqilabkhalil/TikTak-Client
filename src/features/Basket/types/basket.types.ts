// ==================== UI TYPES ====================

export interface BasketProduct {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface BasketItemProps {
  product: BasketProduct;
  onIncrease?: (id: number) => void;
  onDecrease?: (id: number) => void;
  onRemove?: (id: number) => void;
}

export interface BasketListProps {
  products: BasketProduct[];
  onIncrease?: (id: number) => void;
  onDecrease?: (id: number) => void;
  onRemove?: (id: number) => void;
}

export interface OrderSummaryProps {
  total: number;
  onCheckout?: () => void;
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

export interface BasketState {
  items: BasketProduct[];
  total: number;
  count: number;
  isLoading: boolean;
  error: string | null;

  fetchBasket: () => Promise<void>;
  addItem: (productId: number) => Promise<void>;
  decreaseItem: (productId: number) => Promise<void>;
  removeItem: (productId: number) => Promise<void>;
  clearBasket: () => Promise<void>;
  clearError: () => void;
}

export interface BasketServiceResponse {
  items: BasketProduct[];
  total: number;
  count: number;
}
