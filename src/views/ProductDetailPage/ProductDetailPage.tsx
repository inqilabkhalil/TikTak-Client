'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiHeart, FiArrowLeft } from 'react-icons/fi';
import { CategoryList } from '@/features/category';
import { BasketWidget } from '@/shared/components/BasketWidget';
import { DiscountBanner } from '@/shared/components/DiscountBanner/DiscountBanner';
import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { AddToBasketControl } from '@/shared/components/AddToBasketControl';
import { useFavorites } from '@/shared/store';
import { Category } from '@/shared/types/category.types';
import { Product } from '@/shared/types/product.types';
import { formatPrice } from '@/shared/utils';
import styles from './ProductDetailPage.module.css';

interface ProductDetailPageProps {
  productId: number;
  categories: Category[];
  products: Product[];
}

export const ProductDetailPage = ({
  productId,
  categories,
  products,
}: ProductDetailPageProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p className={styles.notFound}>Məhsul tapılmadı</p>;
  }

  const favorite = isFavorite(product.id);

  return (
    <>
      <Breadcrumb items={['Ana səhifə', product.categoryName]} />

      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <CategoryList
            activeSlug={String(product.categoryId)}
            categories={categories}
          />
          <div className={styles.discountBannerWrapper}>
            <DiscountBanner />
          </div>
        </aside>

        <section className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Link
                href={`/category/${product.categoryId}`}
                className={styles.backLink}
              >
                <FiArrowLeft /> geri qayıt
              </Link>

              <button
                type="button"
                className={styles.favoriteBtn}
                aria-label="Sevimlilərə əlavə et"
                aria-pressed={favorite}
                onClick={() => toggleFavorite(product.id)}
              >
                <FiHeart
                  className={favorite ? styles.favoriteActive : undefined}
                />
              </button>
            </div>

            <div className={styles.body}>
              <div className={styles.imageWrapper}>
                {product.imgUrl ? (
                  <Image
                    src={product.imgUrl}
                    alt={product.title}
                    width={160}
                    height={160}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.image} />
                )}
              </div>

              <div className={styles.info}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>{formatPrice(product.price)}</p>

                <div className={styles.controlWrapper}>
                  <AddToBasketControl
                    id={product.id}
                    image={product.imgUrl}
                    title={product.title}
                    price={product.price}
                    inStock
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
