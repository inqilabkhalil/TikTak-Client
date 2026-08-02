import { CategoryItem } from '../CategoryItem';
import { CATEGORIES } from '@/shared/data/catalog';
import styles from './CategoryList.module.css';

interface CategoryListProps {
  activeSlug?: string;
}

export const CategoryList = ({ activeSlug }: CategoryListProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Kateqoriyalar</h3>

      <div className={styles.list}>
        {CATEGORIES.map((category) => (
          <CategoryItem
            key={category.slug}
            title={category.name}
            href={`/category/${category.slug}`}
            active={category.slug === activeSlug}
          />
        ))}
      </div>
    </div>
  );
};
