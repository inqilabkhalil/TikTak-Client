import type {
  CheckoutUserInfo,
  OrderSummaryData,
} from "@/features/checkout/types";


export const MOCK_USER: CheckoutUserInfo = {
  name: "Sarkhan Rahimli",
  address: "Xətai rayon Səriyev küç.45 Bakı",
  phone: "+994 51 399 38 97",
};


export const MOCK_SUMMARY: OrderSummaryData = {
  products: [
    { id: 1, name: "Sumuklu et", quantity: 2, price: 13.65 },
    { id: 2, name: "Pampers gece pants", quantity: 1, price: 13.65 },
  ],
  subtotal: 27.3,
  deliveryFee: 0,
  total: 27.3,
};