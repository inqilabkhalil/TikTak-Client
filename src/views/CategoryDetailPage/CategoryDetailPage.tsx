import { CategoryList } from '@/Features/Categories';
import { ProductsGrid } from '@/Features/ProductsGrid/ProductsGrid';
import { BasketCard } from '@/shared/components/BasketCard';
import styles from './CategoryDetailPage.module.css';

export const CategoryDetailPage = () => {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <CategoryList />
        <div className={styles.banner}>
          <span className={styles.bannerText}>Yeni məhsullar</span>
        </div>
      </aside>

      <section className={styles.content}>
        <ProductsGrid />
      </section>

      <aside className={styles.cartPanel}>
        <BasketCard />
      </aside>
    </div>
  );
};
