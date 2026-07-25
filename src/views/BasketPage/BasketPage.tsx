import { Breadcrumb } from "@/shared/components/Breadcrumb";
import { BasketList, OrderSummary, MOCK_BASKET_PRODUCTS, BASKET_BREADCRUMB_ITEMS } from "@/features/Basket";
import styles from "./BasketPage.module.css";

export function BasketPage() {
  return (
    <>
      <Breadcrumb items={BASKET_BREADCRUMB_ITEMS} />

      <div className={styles.grid}>
        <BasketList products={MOCK_BASKET_PRODUCTS} />
        <OrderSummary products={MOCK_BASKET_PRODUCTS} />
      </div>
    </>
  );
}
