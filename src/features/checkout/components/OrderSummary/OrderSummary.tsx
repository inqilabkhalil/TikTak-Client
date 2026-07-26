import { OrderSummaryProps } from "../../types";
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
              {product.price.toFixed(2)} AZN
            </span>
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.totals}>
        <div className={styles.totalRow}>
          <span>Ümumi:</span>
          <span>{subtotal.toFixed(2)} AZN</span>
        </div>

        <div className={styles.totalRow}>
          <span>Çatdırılma:</span>
          <span>
            {deliveryFee === 0 ? "Pulsuz" : `${deliveryFee.toFixed(2)} AZN`}
          </span>
        </div>
        <div className={`${styles.totalRow} ${styles.finalTotal}`}>
          <span>Yekun məbləğ</span>
          <span>{total.toFixed(2)} AZN</span>
        </div>
      </div>
    </div>
  );
};