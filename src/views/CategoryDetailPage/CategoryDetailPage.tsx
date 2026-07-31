import { CategoryList } from '@/features/Categories';
import { ProductsGrid } from '@/features/ProductsGrid/ProductsGrid';
import { BasketCard } from '@/shared/components/BasketCard';
import { DiscountBanner } from '@/shared/components/DiscountBanner/DiscountBanner';
import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { getCategoryBySlug } from '@/shared/data/catalog';
import styles from './CategoryDetailPage.module.css';

interface CategoryDetailPageProps {
  categorySlug: string;
}

export const CategoryDetailPage = ({ categorySlug }: CategoryDetailPageProps) => {
  const category = getCategoryBySlug(categorySlug);
  const categoryName = category?.name ?? '';

  return (
    <>
      <Breadcrumb items={['Ana səhifə', categoryName]} />

      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <CategoryList activeSlug={categorySlug} />
          <div className={styles.discountBannerWrapper}>
            <DiscountBanner />
          </div>
        </aside>

        <section className={styles.content}>
          <ProductsGrid categorySlug={categorySlug} />
        </section>

        <aside className={styles.cartPanel}>
          <BasketCard />
        </aside>
      </div>
    </>
  );
};
