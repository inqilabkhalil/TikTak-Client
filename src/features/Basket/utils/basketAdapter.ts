import type {
  BasketApiItem,
  BasketProduct,
} from "../types/basket.types";


export const adaptBasketItem = (apiItem: BasketApiItem): BasketProduct => {
  return {
    id: apiItem.id,                         
    productId: apiItem.product.id,           
    name: apiItem.product.title,             
    price: parseFloat(apiItem.product.price), 
    quantity: apiItem.quantity,
    image: apiItem.product.img_url,          
  };
};


export const adaptBasketItems = (apiItems: BasketApiItem[]): BasketProduct[] => {
  return apiItems.map(adaptBasketItem);
};