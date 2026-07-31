'use client';

import { Button } from '@/shared/components/Button';
import { QuantityStepper } from '@/shared/components/QuantityStepper';
import { useBasket } from '@/shared/store';
import styles from './AddToBasketControl.module.css';

interface AddToBasketControlProps {
  id: number;
  image: string;
  title: string;
  price: number;
  inStock: boolean;
  unitLabel?: string;
}

export const AddToBasketControl = ({
  id,
  image,
  title,
  price,
  inStock,
  unitLabel,
}: AddToBasketControlProps) => {
  const { items, addItem, increment, decrement } = useBasket();
  const quantity = items.find((item) => item.id === id)?.quantity ?? 0;

  if (!inStock) {
    return (
      <Button disabled color="#d1d5db" className={styles.button}>
        Səbətə əlavə et
      </Button>
    );
  }

  if (quantity === 0) {
    return (
      <Button
        className={styles.button}
        onClick={() => addItem({ id, image, title, price })}
      >
        Səbətə əlavə et
      </Button>
    );
  }

  return (
    <QuantityStepper
      value={quantity}
      unitLabel={unitLabel}
      onIncrement={() => increment(id)}
      onDecrement={() => decrement(id)}
      size="sm"
    />
  );
};
