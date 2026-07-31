'use client';

import { useEffect } from 'react';
import { Breadcrumb } from '@/shared/components/Breadcrumb';
import {
  BasketList,
  BasketSummary,
  EmptyBasket,
} from '@/shared/components/BasketCard';
import { useBasketStore } from '@/features/Basket/store';
import styles from './BasketPage.module.css';

const BASKET_BREADCRUMB_ITEMS = ['Ana səhifə', 'Səbətim'];

export function BasketPage() {
  const items = useBasketStore((state) => state.items);
  const total = useBasketStore((state) => state.total);
  const fetchBasket = useBasketStore((state) => state.fetchBasket);
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    fetchBasket();
  }, [fetchBasket]);

  const basketItems = items.map((item) => ({
    id: item.id,
    productId: item.productId,
    title: item.name,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
  }));

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.listColumn}>
          <Breadcrumb items={BASKET_BREADCRUMB_ITEMS} />

          <div className={styles.listHeading}>
            <h2 className={styles.listTitle}>Səbətim</h2>
          </div>

          <EmptyBasket />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.listColumn}>
        <Breadcrumb items={BASKET_BREADCRUMB_ITEMS} />

        <div className={styles.listHeading}>
          <h2 className={styles.listTitle}>Səbətim</h2>
          <button
            type="button"
            className={styles.clearButton}
            onClick={clearBasket}
          >
            Səbəti təmizlə
          </button>
        </div>

        <BasketList items={basketItems} />
      </div>

      <div className={styles.summaryColumn}>
        <div className={styles.breadcrumbSpacer} aria-hidden="true">
          <Breadcrumb items={BASKET_BREADCRUMB_ITEMS} />
        </div>

        <h2 className={styles.summaryTitle}>Yekun məbləğ</h2>

        <BasketSummary total={total} className={styles.summaryCard} />
      </div>
    </div>
  );
}
