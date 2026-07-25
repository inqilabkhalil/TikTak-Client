"use client";

import { BasketItem } from "../BasketItem";
import type { BasketListProps } from "../../types/basket.types";
import styles from "./BasketList.module.css";

export const BasketList = ({ products, onIncrease, onRemove, onClear }: BasketListProps) => {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else {
      console.log("onClear not implemented");
    }
  };

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Səbətim</h2>
        <button type="button" className={styles.clearButton} onClick={handleClear}>
          Səbəti təmizlə
        </button>
      </div>

      <div className={styles.list}>
        {products.map((product) => (
          <BasketItem
            key={product.id}
            product={product}
            onIncrease={onIncrease}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  );
};
