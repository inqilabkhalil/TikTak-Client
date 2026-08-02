"use client";

import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import type { BasketProduct } from "@/shared/types/basket.types";
import { formatPrice } from "@/shared/utils";
import styles from "./BasketItem.module.css";

interface BasketItemProps {
  product: BasketProduct;
  onIncrease?: (id: number) => void;
  onDecrease?: (id: number) => void;
  onRemove?: (id: number) => void;  
  variant?: "full" | "compact";
}

export const BasketItem = ({
  product,
  onIncrease,
  onDecrease,
  onRemove,
  variant = "full",
}: BasketItemProps) => {
  const handleIncrease = () => {
    if (onIncrease) onIncrease(product.productId);
    else console.log("onIncrease not implemented", product.id);
  };

  const handleDecrease = () => {
    if (onDecrease) onDecrease(product.productId);
    else console.log("onDecrease not implemented", product.id);
  };

  const handleRemove = () => {
    if (onRemove) onRemove(product.productId);
    else console.log("onRemove not implemented", product.id);
  };

  if (variant === "compact") {
    return (
       <div className={styles.compactItem}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.compactImage}
      />

      <div className={styles.compactInfo}>
        <h4 className={styles.compactName}>{product.name}</h4>

        <div className={styles.compactQty}>
          <button
            type="button"
            className={styles.compactQtyBtn}
            aria-label="Sayı azalt"
            onClick={handleDecrease}
          >
            <FiMinus size={14} />
          </button>
          <span className={styles.compactQtyValue}>{product.quantity}</span>
          <button
            type="button"
            className={styles.compactQtyBtn}
            aria-label="Sayı artır"
            onClick={handleIncrease}
          >
            <FiPlus size={14} />
          </button>
        </div>
      </div>

      <div className={styles.compactPriceWrapper}>
        <p className={styles.compactPrice}>{formatPrice(product.price)}</p>
      </div>

      <button
        type="button"
        className={styles.compactRemoveBtn}
        onClick={handleRemove}
        aria-label="Məhsulu sil"
      >
        <FiTrash2 size={16} />
      </button>
    </div>
    );
  }

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
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
          onClick={handleDecrease}
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