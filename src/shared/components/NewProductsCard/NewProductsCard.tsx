import styles from './NewProductsCard.module.css';

type NewProductsCardProps = {
  title?: string;
  description?: string;
  badge?: string;
};

export const NewProductsCard = ({
  title = 'Yeni məhsullar',
  description = 'Bütün yeni məhsulları burada tapa bilərsiniz',
  badge = 'YENİ',
}: NewProductsCardProps) => {
  return (
    <div className={styles.card}>
      <span className={styles.badge}>{badge}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
