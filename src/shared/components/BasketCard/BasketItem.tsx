import styles from './BasketCard.module.css';
import type { BasketItemType } from './types';

type BasketItemProps = {
  item: BasketItemType;
};

export const BasketItem = ({ item }: BasketItemProps) => {
  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.title} className={styles.image} />

      <div className={styles.info}>
        <h4>{item.title}</h4>
        <p className={styles.price}>
          {(item.price * item.quantity).toFixed(2)} AZN
        </p>

        <div className={styles.controls}>
          <button
            className={styles.minus}
            type="button"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            className={styles.plus}
            type="button"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
