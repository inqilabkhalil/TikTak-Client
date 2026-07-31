'use client';

import { EmptyBasket } from './EmptyBasket';
import { BasketList } from './BasketList';
import { BasketSummary } from './BasketSummary';
import { useBasket } from '@/shared/store';
import styles from './BasketCard.module.css';

export const BasketCard = () => {
  const { items, total } = useBasket();

  if (!items.length) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Səbətim</h3>
        <EmptyBasket />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Səbətim</h3>

      <div className={styles.container}>
        <BasketList items={items} />
        <BasketSummary total={total} />
      </div>
    </div>
  );
};
