'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiHeart, FiArrowLeft } from 'react-icons/fi';
import { CategoryList } from '@/features/Categories';
import { BasketWidget } from '@/shared/components/BasketWidget';
import { DiscountBanner } from '@/shared/components/DiscountBanner/DiscountBanner';
import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { AddToBasketControl } from '@/shared/components/AddToBasketControl';
import { getProductById, getCategoryBySlug } from '@/shared/data/catalog';
import { useFavorites } from '@/shared/store';
import styles from './ProductDetailPage.module.css';

interface ProductDetailPageProps {
  productId: number;
}

export const ProductDetailPage = ({ productId }: ProductDetailPageProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const product = getProductById(productId);

  if (!product) {
    return null;
  }

  const category = getCategoryBySlug(product.categorySlug);
  const favorite = isFavorite(product.id);

  return (
    <>
      <Breadcrumb items={['Ana səhifə', category?.name ?? '']} />

      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <CategoryList activeSlug={product.categorySlug} />
          <div className={styles.discountBannerWrapper}>
            <DiscountBanner />
          </div>
        </aside>

        <section className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Link href={`/category/${product.categorySlug}`} className={styles.backLink}>
                <FiArrowLeft /> geri qayıt
              </Link>

              <button
                type="button"
                className={styles.favoriteBtn}
                aria-label="Sevimlilərə əlavə et"
                aria-pressed={favorite}
                onClick={() => toggleFavorite(product.id)}
              >
                <FiHeart className={favorite ? styles.favoriteActive : undefined} />
              </button>
            </div>

            <div className={styles.body}>
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.title} className={styles.image} />
              </div>

              <div className={styles.info}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>{product.price} AZN</p>
                {!product.inStock && (
                  <p className={styles.outOfStock}>Stokda yoxdur</p>
                )}

                <div className={styles.controlWrapper}>
                  <AddToBasketControl
                    id={product.id}
                    image={product.image.src}
                    title={product.title}
                    price={product.price}
                    inStock={product.inStock}
                    unitLabel="kq"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className={styles.cartPanel}>
          <BasketWidget />
        </aside>
      </div>
    </>
  );
};
