'use client';

import { useEffect } from 'react';
import { CategoryList } from '@/features/Categories';
import { ProductsGrid } from '@/features/ProductsGrid/ProductsGrid';
import { BasketWidget } from '@/shared/components/BasketWidget';
import { DiscountBanner } from '@/shared/components/DiscountBanner/DiscountBanner';
import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { useCategoryStore } from '@/shared/store';
import styles from './CategoryDetailPage.module.css';

interface CategoryDetailPageProps {
  categorySlug: string;
}

export const
CategoryDetailPage = ({ categorySlug }: CategoryDetailPageProps) => {
  const categories = useCategoryStore((s) => s.categories);
  const fetchCategories = useCategoryStore((s) => s.fetchCategories);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  const category = categories.find((c) => String(c.id) === categorySlug);
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
          <BasketWidget />
        </aside>
      </div>
    </>
  );
};
