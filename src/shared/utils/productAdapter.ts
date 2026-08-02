import { Product, ProductApiItem } from '@/shared/types/product.types';

export const adaptProduct = (item: ProductApiItem): Product => ({
  id: item.id,
  title: item.title,
  imgUrl: item.img_url,
  description: item.description,
  price: parseFloat(item.price),
  type: item.type,
  categoryId: item.category.id,
  categoryName: item.category.name,
  createdAt: item.created_at,
});

export const adaptProducts = (items: ProductApiItem[]): Product[] =>
  items.map(adaptProduct);
