'use client';

import { useRouter } from 'next/navigation';
import { Breadcrumb } from '@/shared/components/Breadcrumb';
import {
  BasketList,
  OrderSummary,
  BASKET_BREADCRUMB_ITEMS,
} from '@/features/Basket';
import { EmptyBasket } from '@/shared/components/BasketCard/EmptyBasket';
import { useBasket } from '@/shared/store';
import styles from './BasketPage.module.css';

export function BasketPage() {
  const router = useRouter();
  const { items, increment, decrement, clearBasket } = useBasket();

  const products = items.map((item) => ({
    id: item.id,
    name: item.title,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
  }));

  const handleCheckout = () => {
    router.push('/checkout');
  };

  if (products.length === 0) {
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

        <BasketList products={products} onIncrease={increment} onDecrease={decrement} />
      </div>

      <div className={styles.summaryColumn}>
        <div className={styles.breadcrumbSpacer} aria-hidden="true">
          <Breadcrumb items={BASKET_BREADCRUMB_ITEMS} />
        </div>

        <h2 className={styles.summaryTitle}>Yekun məbləğ</h2>

        <OrderSummary products={products} onCheckout={handleCheckout} />
      </div>
    </div>
  );
}
