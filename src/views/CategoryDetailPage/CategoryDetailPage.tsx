import { CategoryList } from '@/Features/Categories';
import { ProductsGrid } from '@/Features/ProductsGrid/ProductsGrid';
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
        <h3 className={styles.cartTitle}>Səbət</h3>
        <p className={styles.cartText}>Məhsullar əlavə edin</p>
      </aside>
    </div>
  );
};
