import styles from './EmptyCart.module.css';

export const EmptyCart = () => {
  return (
    <div className={styles.emptyState}>
      <p className={styles.title}>Səbətiniz boşdur</p>
      <p className={styles.subtitle}>Sevimli məhsullarınızı əlavə edin.</p>
    </div>
  );
};
