'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';  // ← əlavə et
import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { BasketList } from '@/features/Basket/components/BasketList';
import { OrderSummary } from '@/features/Basket/components/OrderSummary';
import { EmptyBasket } from '@/shared/components/BasketCard';
import { useBasketStore } from '@/features/Basket/store';
import { BASKET_BREADCRUMB_ITEMS } from '@/features/Basket/constants/basket.constants';
import styles from './BasketPage.module.css';

export function BasketPage() {
  const router = useRouter();  
  
  const items = useBasketStore((state) => state.items);
  const total = useBasketStore((state) => state.total);
  const fetchBasket = useBasketStore((state) => state.fetchBasket);
  const clearBasket = useBasketStore((state) => state.clearBasket);
  const addItem = useBasketStore((state) => state.addItem);
  const decreaseItem = useBasketStore((state) => state.decreaseItem);

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

        <BasketList
          products={items}
          onIncrease={addItem}
          onDecrease={decreaseItem}
        />
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