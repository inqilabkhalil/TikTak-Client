"use client";

import { BasketItem } from "../BasketItem";
import type { BasketProduct } from "@/shared/types/basket.types";
import styles from "./BasketList.module.css";

interface BasketListProps {
  products: BasketProduct[];
  onIncrease?: (id: number) => void;
  onDecrease?: (id: number) => void;
  onRemove?: (id: number) => void;
  variant?: "full" | "compact";
}

export const BasketList = ({
  products,
  onIncrease,
  onDecrease,
  onRemove,
  variant = "full",
}: BasketListProps) => {
  const isCompact = variant === "compact";

  return (
    <section className={isCompact ? styles.compactCard : styles.card}>
      <div className={isCompact ? styles.compactList : styles.list}>
        {products.map((product) => (
          <BasketItem
            key={product.id}
            product={product}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
};