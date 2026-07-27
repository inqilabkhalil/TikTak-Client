import { Card } from '@/shared/components/Card';
import { Button } from '@/shared/components/Button';
import { formatPrice } from '@/shared/utils';
import styles from './FavoriteCard.module.css';

interface FavoriteCardProps {
  title: string;
  price: number;
  emoji?: string;
  className?: string;
}

export const FavoriteCard = ({
  title,
  price,
  emoji = '🍌',
  className,
}: FavoriteCardProps) => {
  return (
    <Card className={className}>
      <div className={styles.content}>
        <div className={styles.image}>{emoji}</div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.price}>{formatPrice(price)}</p>

        <Button className={styles.actionButton}>Səbətə əlavə et</Button>
      </div>
    </Card>
  );
};
