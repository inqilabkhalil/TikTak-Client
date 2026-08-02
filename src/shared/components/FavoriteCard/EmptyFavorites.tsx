import styles from './EmptyFavorites.module.css';

export const EmptyFavorites = () => {
  return (
    <div className={styles.emptyState}>
      <p className={styles.title}>Sevimliləriniz boşdur</p>
      <p className={styles.subtitle}>Sevimli məhsullarınızı əlavə edin.</p>
    </div>
  );
};
