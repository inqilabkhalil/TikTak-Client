import { Banner } from '@/features/category/components/Banner';
import { CategoryGrid } from '@/features/category/components/CategoryGrid';
import { Category } from '@/shared/types/category.types';
import styles from './CategoryListPage.module.css';

interface CategoryListPageProps {
  categories: Category[];
}

export const CategoryListPage = ({ categories }: CategoryListPageProps) => {
  return (
    <div className={styles.page}>
      <Banner />
      <CategoryGrid categories={categories} />
    </div>
  );
};
