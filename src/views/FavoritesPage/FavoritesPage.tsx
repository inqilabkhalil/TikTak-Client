'use client';

import { FavoriteList } from '@/shared/components/FavoriteCard';
import { BasketWidget } from '@/shared/components/BasketWidget';
import { useFavorites } from '@/shared/store';
import { getProductById } from '@/shared/data/catalog';
import styles from './FavoritesPage.module.css';

export const FavoritesPage = () => {
  const { ids } = useFavorites();

  const favorites = ids
    .map((id) => getProductById(id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <div className={styles.page}>
      <div className={styles.favoritesColumn}>
        <FavoriteList favorites={favorites} />
      </div>

      <div className={styles.cartColumn}>
        <BasketWidget />
      </div>
    </div>
  );
};
