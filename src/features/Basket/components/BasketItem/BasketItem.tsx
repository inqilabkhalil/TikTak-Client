"use client";

import Image from "next/image";
import { FiTrash2, FiPlus } from "react-icons/fi";
import type { BasketItemProps } from "../../types/basket.types";
import { formatPrice } from "@/shared/utils";
import styles from "./BasketItem.module.css";

export const BasketItem = ({ product, onIncrease, onRemove }: BasketItemProps) => {
  const handleIncrease = () => {
    if (onIncrease) {
      onIncrease(product.id);
    } else {
      console.log("onIncrease not implemented", product.id);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(product.id);
    } else {
      console.log("onRemove not implemented", product.id);
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <Image src={product.image} alt={product.name} className={styles.image} />
        </div>

        <div className={styles.details}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>{formatPrice(product.price)}</p>
        </div>
      </div>

      <div className={styles.counter}>
        <button
          type="button"
          className={styles.counterButton}
          onClick={handleRemove}
          aria-label="Məhsulu sil"
        >
          <FiTrash2 size={16} />
        </button>

        <span className={styles.quantity}>{product.quantity}</span>

        <button
          type="button"
          className={styles.counterButton}
          onClick={handleIncrease}
          aria-label="Sayı artır"
        >
          <FiPlus size={16} />
        </button>
      </div>
    </div>
  );
};
