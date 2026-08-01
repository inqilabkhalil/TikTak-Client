import { Button } from '@/shared/components/Button';
import styles from './AddToBasketControl.module.css';

interface AddToBasketControlProps {
  id: number;
  image: string;
  title: string;
  price: number;
  inStock: boolean;
  unitLabel?: string;
}

export const AddToBasketControl = ({ inStock }: AddToBasketControlProps) => {
  if (!inStock) {
    return (
      <Button disabled color="#d1d5db" className={styles.button}>
        Səbətə əlavə et
      </Button>
    );
  }

  return (
    <Button className={styles.button}>
      Səbətə əlavə et
    </Button>
  );
};
