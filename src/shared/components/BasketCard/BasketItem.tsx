'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './BasketCard.module.css';
import type { BasketItemType } from './types';
import { useBasketStore } from '@/features/Basket/store';

type BasketItemProps = {
  item: BasketItemType;
  qtyTextColor?: string;
};

export const BasketItem = ({ item, qtyTextColor = '#ffffff' }: BasketItemProps) => {
  const addItem = useBasketStore((state) => state.addItem);
  const decreaseItem = useBasketStore((state) => state.decreaseItem);

  return (
    <div className={styles.item}>
      <Image
        src={item.image}
        alt={item.title}
        className={styles.image}
        width={64}
        height={64}
      />

      <div className={styles.info}>
        <h4>{item.title}</h4>
        <p className={styles.unitPrice}>{item.price.toFixed(2)} AZN</p>
      </div>

      <div
        className={styles.qty}
        style={{ '--qty-text-color': qtyTextColor } as CSSProperties}
      >
        <button
          type="button"
          className={styles.qtyBtn}
          aria-label="Decrease quantity"
          onClick={() => decreaseItem(item.productId)}
        >
          −
        </button>
        <span className={styles.qtyValue}>{item.quantity}</span>
        <button
          type="button"
          className={styles.qtyBtn}
          aria-label="Increase quantity"
          onClick={() => addItem(item.productId)}
        >
          +
        </button>
      </div>
    </div>
  );
};
