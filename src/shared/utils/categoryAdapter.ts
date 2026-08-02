import { Category, CategoryApiItem } from '@/shared/types/category.types';

export const adaptCategory = (item: CategoryApiItem): Category => ({
  id: item.id,
  name: item.name,
  imgUrl: item.img_url,
  description: item.description,
  createdAt: item.created_at,
});

export const adaptCategories = (items: CategoryApiItem[]): Category[] =>
  items.map(adaptCategory);
