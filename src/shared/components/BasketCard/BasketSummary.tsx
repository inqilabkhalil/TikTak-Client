'use client';

import { useRouter } from 'next/navigation';
import styles from './BasketCard.module.css';

type BasketSummaryProps = {
  total: number;
  className?: string;
};

export const BasketSummary = ({ total, className }: BasketSummaryProps) => {
  const router = useRouter();

  return (
    <div className={[styles.summary, className].filter(Boolean).join(' ')}>
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

      <button
        type="button"
        className={styles.checkoutBtn}
        onClick={() => router.push('/checkout')}
      >
        Sifarişi tamamla
      </button>
    </div>
  );
};
