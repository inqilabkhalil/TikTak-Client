"use client";

import { Breadcrumb } from "@/shared/components/Breadcrumb";
import { BasketList, OrderSummary, MOCK_BASKET_PRODUCTS, BASKET_BREADCRUMB_ITEMS } from "@/features/Basket";
import styles from "./BasketPage.module.css";

export function BasketPage() {
  const handleClear = () => {
    console.log("onClear not implemented");
  };

  return (
    <div className={styles.page}>
      <div className={styles.listColumn}>
        <Breadcrumb items={BASKET_BREADCRUMB_ITEMS} />

        <div className={styles.listHeading}>
          <h2 className={styles.listTitle}>Səbətim</h2>
          <button type="button" className={styles.clearButton} onClick={handleClear}>
            Səbəti təmizlə
          </button>
        </div>

        <BasketList products={MOCK_BASKET_PRODUCTS} />
      </div>

      <div className={styles.summaryColumn}>
        <div className={styles.breadcrumbSpacer} aria-hidden="true">
          <Breadcrumb items={BASKET_BREADCRUMB_ITEMS} />
        </div>

        <h2 className={styles.summaryTitle}>Yekun məbləğ</h2>

        <OrderSummary products={MOCK_BASKET_PRODUCTS} />
      </div>
    </div>
  );
}
