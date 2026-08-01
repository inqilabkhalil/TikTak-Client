import type { User } from "@/features/auth/types/authType";
import { BasketProduct } from "@/features/Basket/types/basket.types";

import type {
  CheckoutUserInfo,
  OrderSummaryData,
  OrderProduct,
} from "@/features/checkout/types";

/**
 * Auth User → Checkout üçün user info
 */
export const mapUserToCheckoutInfo = (user: User): CheckoutUserInfo => ({
  name: user.full_name,
  address: user.address ?? "",
  phone: user.phone,
});

/**
 * Basket product → OrderSummary üçün product
 */
const mapBasketProductToOrderProduct = (
  item: BasketProduct
): OrderProduct => ({
  id: item.productId,
  name: item.name,
  quantity: item.quantity,
  price: item.price,
});

/**
 * Basket state → OrderSummary data
 */
export const mapBasketToSummary = (
  items: BasketProduct[],
  total: number,
  deliveryFee: number = 0
): OrderSummaryData => ({
  products: items.map(mapBasketProductToOrderProduct),
  subtotal: total,
  deliveryFee,
  total: total + deliveryFee,
});