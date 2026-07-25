import type { StaticImageData } from "next/image";

export interface BasketProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: StaticImageData;
}

export interface BasketItemProps {
  product: BasketProduct;
  onIncrease?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export interface BasketListProps {
  products: BasketProduct[];
  onIncrease?: (id: string) => void;
  onRemove?: (id: string) => void;
  onClear?: () => void;
}

export interface OrderSummaryProps {
  products: BasketProduct[];
  onCheckout?: () => void;
}
