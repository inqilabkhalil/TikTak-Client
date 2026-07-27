import { OrderSummaryProps } from "../../types";
import { formatPrice } from "@/shared/utils";
import styles from "./OrderSummary.module.css";

export const OrderSummary = ({ data }: OrderSummaryProps) => {
  const { products, subtotal, deliveryFee, total } = data;
  return (
    <div className={styles.card}>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.productRow}>
            <span className={styles.productName}>
              {product.quantity} x {product.name}
            </span>
            <span className={styles.productPrice}>
              {formatPrice(product.price)}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.totals}>
        <div className={styles.totalRow}>
          <span>Ümumi:</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <div className={styles.totalRow}>
          <span>Çatdırılma:</span>
          <span>{deliveryFee === 0 ? "Pulsuz" : formatPrice(deliveryFee)}</span>
        </div>
        <div className={`${styles.totalRow} ${styles.finalTotal}`}>
          <span>Yekun məbləğ</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
};