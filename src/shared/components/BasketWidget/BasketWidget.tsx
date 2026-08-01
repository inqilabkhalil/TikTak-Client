"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BasketList } from "@/shared/components/BasketList";
import { OrderSummary } from "@/shared/components/OrderSummary";
import { useBasketStore } from "@/shared/store";
import emptyBasket from "../../assets/empty-basket.png";
import styles from "./BasketWidget.module.css";

export const BasketWidget = () => {
  const router = useRouter();
  const items = useBasketStore((state) => state.items);
  const total = useBasketStore((state) => state.total);
  const fetchBasket = useBasketStore((state) => state.fetchBasket);
  const addItem = useBasketStore((state) => state.addItem);
  const decreaseItem = useBasketStore((state) => state.decreaseItem);

  useEffect(() => {
    fetchBasket();
  }, [fetchBasket]);

  if (!items.length) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Səbətim</h3>

        <div className={styles.container}>
          <div className={styles.emptyBasket}>
            <Image
              src={emptyBasket}
              alt="Empty Basket"
              className={styles.emptyImage}
              width={140}
              height={140}
            />

            <h3>Səbətiniz boşdur</h3>

            <p>
              Sifariş vermək üçün
              <br />
              səbətinizə məhsul əlavə edin
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Səbətim</h3>

      <div className={styles.container}>
        <BasketList
          products={items}
          onIncrease={addItem}
          onDecrease={decreaseItem}
          variant="compact"
        />
        <OrderSummary
          total={total}
          onCheckout={() => router.push("/basket")}
          variant="compact"
        />
      </div>
    </div>
  );
};
