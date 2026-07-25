import orangeImage from "@/shared/assets/orange.svg";
import type { BasketProduct } from "../types/basket.types";

export const DELIVERY_TEXT = "Pulsuz";

export const BASKET_BREADCRUMB_ITEMS = ["Ana səhifə", "Meyvələr"];

export const MOCK_BASKET_PRODUCTS: BasketProduct[] = [
  {
    id: "1",
    name: "Portağal 1 kq",
    price: 2.35,
    quantity: 1,
    image: orangeImage,
  },
  {
    id: "2",
    name: "Portağal 1 kq",
    price: 2.35,
    quantity: 1,
    image: orangeImage,
  },
];
