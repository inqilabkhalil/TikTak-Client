'use client';

import { useEffect } from 'react';
import { EmptyBasket } from './EmptyBasket';
import { BasketList } from './BasketList';
import { BasketSummary } from './BasketSummary';
import { useBasketStore } from '@/features/Basket/store';
import styles from './BasketCard.module.css';

export const BasketCard = () => {
  const items = useBasketStore((state) => state.items);
  const total = useBasketStore((state) => state.total);
  const fetchBasket = useBasketStore((state) => state.fetchBasket);

  useEffect(() => {
    fetchBasket();
  }, [fetchBasket]);

  if (!items.length) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Səbətim</h3>
        <EmptyBasket />
      </div>
    );
  }

  const basketItems = items.map((item) => ({
    id: item.id,
    productId: item.productId,
    title: item.name,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
  }));

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Səbətim</h3>

      <div className={styles.container}>
        <BasketList items={basketItems} />
        <BasketSummary total={total} />
      </div>
    </div>
  );
};
