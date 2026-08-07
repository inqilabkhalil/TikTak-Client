import { CategoryItem } from '../CategoryItem';
import type { CategoryListProps } from '../../types';
import styles from './CategoryList.module.css';

export const CategoryList = ({ activeSlug, categories }: CategoryListProps) => {
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
