import type { BasketProduct } from "../types/basket.types";

export const calculateTotal = (products: BasketProduct[]): number => {
return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
};