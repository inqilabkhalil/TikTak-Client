import type { Category } from '@/shared/types/category.types';

export interface CategoryItemProps {
  title: string;
  href: string;
  active?: boolean;
}

export interface CategoryListProps {
  activeSlug?: string;
  categories: Category[];
}

export interface CategoryGridProps {
  categories: Category[];
}
