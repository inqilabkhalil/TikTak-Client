'use client';

import { useEffect } from 'react';
import { CategoryItem } from '../CategoryItem';
import { useCategoryStore } from '@/shared/store';
import styles from './CategoryList.module.css';

interface CategoryListProps {
  activeSlug?: string;
}

export const CategoryList = ({ activeSlug }: CategoryListProps) => {
  const categories = useCategoryStore((state) => state.categories);
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Kateqoriyalar</h3>

      <div className={styles.list}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            title={category.name}
            href={`/category/${category.id}`}
            active={String(category.id) === activeSlug}
          />
        ))}
      </div>
    </div>
  );
};
