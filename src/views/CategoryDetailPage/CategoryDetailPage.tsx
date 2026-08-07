import { CategoryList } from '@/features/category';
import { ProductsGrid } from '@/features/products';
import { BasketWidget } from '@/shared/components/BasketWidget';
import { DiscountBanner } from '@/shared/components/DiscountBanner/DiscountBanner';
import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { Category } from '@/shared/types/category.types';
import { Product } from '@/shared/types/product.types';
import styles from './CategoryDetailPage.module.css';

interface CategoryDetailPageProps {
  categorySlug: string;
  categories: Category[];
  products: Product[];
}

export const CategoryDetailPage = ({
  categorySlug,
  categories,
  products,
}: CategoryDetailPageProps) => {
  const category = categories.find((c) => String(c.id) === categorySlug);
  const categoryName = category?.name ?? '';

  return (
    <>
      <Breadcrumb items={['Ana səhifə', categoryName]} />

      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <CategoryList activeSlug={categorySlug} categories={categories} />
          <div className={styles.discountBannerWrapper}>
            <DiscountBanner />
          </div>
        </aside>

        <section className={styles.content}>
          <ProductsGrid categorySlug={categorySlug} products={products} />
        </section>

        <aside className={styles.cartPanel}>
          <BasketWidget />
        </aside>
      </div>
    </>
  );
};
