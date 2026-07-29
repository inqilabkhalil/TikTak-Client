export interface BasketProduct {
  id: number;
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
  products: BasketProduct[];
  onCheckout?: () => void;
}
