"use client";

import type { OrderSummaryProps } from "../../types/basket.types";
import { formatPrice } from "@/shared/utils";
import { DELIVERY_TEXT } from "../../constants/basket.constants";
import styles from "./OrderSummary.module.css";

export const OrderSummary = ({ total, onCheckout }: OrderSummaryProps) => {

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    } else {
      console.log("onCheckout not implemented");
    }
  };

  return (
    <section className={styles.card}>
      <div className={styles.row}>
        <span className={styles.label}>Ümumi</span>
        <span className={styles.value}>{formatPrice(total)}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Çatırılma</span>
        <span className={styles.value}>{DELIVERY_TEXT}</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.row}>
        <span className={styles.totalLabel}>Yekun məbləğ</span>
        <span className={styles.totalValue}>{formatPrice(total)}</span>
      </div>

      <div className={styles.spacer} />

      <button type="button" className={styles.checkoutButton} onClick={handleCheckout}>
        Sifarişi tamamla
      </button>
    </section>
  );
};
