import { Banner } from '@/features/home/components/Banner';
import { CategoryGrid } from '@/features/home/components/CategoryGrid';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Banner />
      <CategoryGrid />
    </div>
  );
};
