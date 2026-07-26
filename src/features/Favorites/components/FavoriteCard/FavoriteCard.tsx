import { Card } from '@/shared/components/Card';
import { Button } from '@/shared/components/Button';
import styles from './FavoriteCard.module.css';

interface FavoriteCardProps {
  title: string;
  price: number;
}

export const FavoriteCard = ({ title, price }: FavoriteCardProps) => {
  return (
    <Card>
      <div className={styles.content}>
        <div className={styles.image}>🍌</div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.price}>{price} AZN</p>

        <Button> Səbətə əlavə et </Button>
      </div>
    </Card>
  );
};
