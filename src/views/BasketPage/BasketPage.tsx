'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Breadcrumb } from '@/shared/components/Breadcrumb';
import {
  BasketList,
  OrderSummary,
  BASKET_BREADCRUMB_ITEMS,
} from '@/features/Basket';
import { EmptyBasket } from '@/shared/components/BasketCard/EmptyBasket';
import styles from './BasketPage.module.css';
import { useBasketStore } from '@/features/Basket/store';

export function BasketPage() {
  const router = useRouter();

  const items = useBasketStore((state) => state.items);
  const total = useBasketStore((state) => state.total);
  const fetchBasket = useBasketStore((state) => state.fetchBasket);
  const addItem = useBasketStore((state) => state.addItem);
  const decreaseItem = useBasketStore((state) => state.decreaseItem);
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    fetchBasket();
  }, [fetchBasket]);

  const handleCheckout = () => {
    router.push('/checkout');
  };

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

        <BasketList products={items} onIncrease={addItem} onDecrease={decreaseItem} />
      </div>

      <div className={styles.summaryColumn}>
        <div className={styles.breadcrumbSpacer} aria-hidden="true">
          <Breadcrumb items={BASKET_BREADCRUMB_ITEMS} />
        </div>

        <h2 className={styles.summaryTitle}>Yekun məbləğ</h2>

        <OrderSummary total={total} onCheckout={handleCheckout} />
      </div>
    </div>
  );
}