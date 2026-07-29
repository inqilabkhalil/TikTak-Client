import styles from './BasketCard.module.css';
import { BasketItem } from './BasketItem';
import type { BasketItemType } from './types';

type BasketSummaryProps = {
  items?: BasketItemType[];
};

export const BasketSummary = ({ items = [] }: BasketSummaryProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Səbətim</h3>

      <div className={styles.items}>
        {items.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.row}>
          <span className={styles.label}>Ümumi:</span>
          <span className={styles.value}>{total.toFixed(2)} AZN</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Çatdırılma:</span>
          <span className={styles.value}>Pulsuz</span>
        </div>

        <div className={styles.total}>
          <span className={styles.totalLabel}>Yekun məbləğ:</span>
          <span className={styles.totalValue}>{total.toFixed(2)} AZN</span>
        </div>

        <button className={styles.checkoutBtn}>Sifarişi tamamla</button>
      </div>
    </div>
  );
};
