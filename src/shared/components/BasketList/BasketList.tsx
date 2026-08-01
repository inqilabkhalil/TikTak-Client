"use client";

import { BasketItem } from "../BasketItem";
import type { BasketProduct } from "@/features/Basket/types/basket.types";
import styles from "./BasketList.module.css";

interface BasketListProps {
  products: BasketProduct[];
  onIncrease?: (id: number) => void;
  onDecrease?: (id: number) => void;
  variant?: "full" | "compact";
}

export const BasketList = ({
  products,
  onIncrease,
  onDecrease,
  variant = "full",
}: BasketListProps) => {
  if (variant === "compact") {
    return (
      <div className={styles.compactList}>
        {products.map((product) => (
          <BasketItem
            key={product.id}
            product={product}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            variant="compact"
          />
        ))}
      </div>
    );
  }

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
