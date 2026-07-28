import { CategoryList } from '@/Features/Categories';
import { ProductsGrid } from '@/Features/ProductsGrid/ProductsGrid';
import { BasketCard } from '@/shared/components/BasketCard';
import { DiscountBanner } from '@/shared/components/DiscountBanner/DiscountBanner';
import appleImage from '@/shared/assets/alma.png'; // Layihəndə olan şəkli seç
import styles from './CategoryDetailPage.module.css';

export const CategoryDetailPage = () => {
  const demoItems = [
    {
      id: 1,
      image: appleImage.src,
      title: 'Yaşıl Alma',
      price: 2.5,
      quantity: 2,
    },
    {
      id: 2,
      image: appleImage.src,
      title: 'Qırmızı Alma',
      price: 3.2,
      quantity: 1,
    },
  ];

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <CategoryList />
        <div className={styles.discountBannerWrapper}>
          <DiscountBanner />
        </div>
      </aside>

      <section className={styles.content}>
        <ProductsGrid />
      </section>

      <aside className={styles.cartPanel}>
        <BasketCard items={demoItems} />
      </aside>
    </div>
  );
};
