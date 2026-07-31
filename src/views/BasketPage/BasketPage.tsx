'use client';

import { Breadcrumb } from '@/shared/components/Breadcrumb';
import {
  BasketList,
  BasketSummary,
  EmptyBasket,
} from '@/shared/components/BasketCard';
import { useBasket } from '@/shared/store';
import styles from './BasketPage.module.css';

const BASKET_BREADCRUMB_ITEMS = ['Ana səhifə', 'Səbətim'];

export function BasketPage() {
  const { items, total, clearBasket } = useBasket();

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

        <BasketList items={items} />
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
