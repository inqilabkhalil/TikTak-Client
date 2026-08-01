"use client";

import { formatPrice } from "@/shared/utils";
import { DELIVERY_TEXT } from "@/shared/constants/basket.constants";
import styles from "./OrderSummary.module.css";

interface OrderSummaryProps {
  total: number;
  onCheckout?: () => void;
  variant?: "full" | "compact";
}

export const OrderSummary = ({
  total,
  onCheckout,
  variant = "full",
}: OrderSummaryProps) => {
  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    } else {
      console.log("onCheckout not implemented");
    }
  };

  if (variant === "compact") {
    return (
      <section className={styles.compactCard}>
        <div className={styles.compactRow}>
          <span className={styles.compactLabel}>Ümumi</span>
          <span className={styles.compactValue}>{formatPrice(total)}</span>
        </div>

        <div className={styles.compactRow}>
          <span className={styles.compactLabel}>Çatdırılma</span>
          <span className={styles.compactValue}>{DELIVERY_TEXT}</span>
        </div>

        <div className={styles.compactTotal}>
          <span className={styles.compactTotalLabel}>Yekun məbləğ</span>
          <span className={styles.compactTotalValue}>
            {formatPrice(total)}
          </span>
        </div>

        <button
          type="button"
          className={styles.compactCheckoutButton}
          onClick={handleCheckout}
        >
          Sifarişi tamamla
        </button>
      </section>
    );
  }

  return (
    <section className={styles.card}>
      <div className={styles.row}>
        <span className={styles.label}>Ümumi</span>
        <span className={styles.value}>{formatPrice(total)}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Çatdırılma</span>
        <span className={styles.value}>{DELIVERY_TEXT}</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.row}>
        <span className={styles.totalLabel}>Yekun məbləğ</span>
        <span className={styles.totalValue}>{formatPrice(total)}</span>
      </div>

      <div className={styles.spacer} />

      <button
        type="button"
        className={styles.checkoutButton}
        onClick={handleCheckout}
      >
        Sifarişi tamamla
      </button>
    </section>
  );
};
