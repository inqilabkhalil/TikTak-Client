"use client";

import { BasketItem } from "../BasketItem";
import type { BasketListProps } from "../../types/basket.types";
import styles from "./BasketList.module.css";

export const BasketList = ({ products, onIncrease, onDecrease }: BasketListProps) => {
  return (
    <section className={styles.card}>
      <div className={styles.list}>
        {products.map((product) => (
          <BasketItem
            key={product.id}
            product={product}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </div>
    </section>
  );
};
