import { Banner } from '@/Features/home/components/Banner';
import { CategoryGrid } from '@/Features/home/components/CategoryGrid';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Banner />
      <CategoryGrid />
    </div>
  );
};
