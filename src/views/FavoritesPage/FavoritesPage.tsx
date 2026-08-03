'use client';

import { useEffect } from 'react';
import { FavoriteList } from '@/shared/components/FavoriteCard';
import { BasketWidget } from '@/shared/components/BasketWidget';
import { useFavorites } from '@/shared/store';
import styles from './FavoritesPage.module.css';

export const FavoritesPage = () => {
  const products = useFavorites((state) => state.products);
  const fetchFavorites = useFavorites((state) => state.fetchFavorites);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <div className={styles.page}>
      <div className={styles.favoritesColumn}>
        <FavoriteList favorites={products} />
      </div>

      <div className={styles.cartColumn}>
        <BasketWidget />
      </div>
    </div>
  );
};
