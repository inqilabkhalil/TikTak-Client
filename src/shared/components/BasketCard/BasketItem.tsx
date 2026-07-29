'use client';

import { FiTrash2 } from 'react-icons/fi';
import styles from './BasketCard.module.css';
import type { BasketItemType } from './types';
import { useBasket } from '@/shared/store';

type BasketItemProps = {
  item: BasketItemType;
};

export const BasketItem = ({ item }: BasketItemProps) => {
  const { increment, decrement, removeItem } = useBasket();

  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.title} className={styles.image} />

      <div className={styles.info}>
        <div className={styles.itemHeader}>
          <h4>{item.title}</h4>
          <button
            className={styles.deleteBtn}
            type="button"
            aria-label="Remove item"
            onClick={() => removeItem(item.id)}
          >
            <FiTrash2 />
          </button>
        </div>

        <div className={styles.itemFooter}>
          <div className={styles.controls}>
            <button
              className={styles.minus}
              type="button"
              aria-label="Decrease quantity"
              onClick={() => decrement(item.id)}
            >
              −
            </button>
            <span>{item.quantity}</span>
            <button
              className={styles.plus}
              type="button"
              aria-label="Increase quantity"
              onClick={() => increment(item.id)}
            >
              +
            </button>
          </div>

          <p className={styles.price}>
            {(item.price * item.quantity).toFixed(2)} AZN
          </p>
        </div>
      </div>
    </div>
  );
};
