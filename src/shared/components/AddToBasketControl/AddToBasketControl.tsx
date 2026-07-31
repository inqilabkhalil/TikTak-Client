'use client';

import { Button } from '@/shared/components/Button';
import { QuantityStepper } from '@/shared/components/QuantityStepper';
import { useBasketStore } from '@/features/Basket/store';
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
  inStock,
  unitLabel,
}: AddToBasketControlProps) => {
  const items = useBasketStore((state) => state.items);
  const addItem = useBasketStore((state) => state.addItem);
  const decreaseItem = useBasketStore((state) => state.decreaseItem);
  const quantity = items.find((item) => item.productId === id)?.quantity ?? 0;

  if (!inStock) {
    return (
      <Button disabled color="#d1d5db" className={styles.button}>
        Səbətə əlavə et
      </Button>
    );
  }

  if (quantity === 0) {
    return (
      <Button className={styles.button} onClick={() => addItem(id)}>
        Səbətə əlavə et
      </Button>
    );
  }

  return (
    <QuantityStepper
      value={quantity}
      unitLabel={unitLabel}
      onIncrement={() => addItem(id)}
      onDecrement={() => decreaseItem(id)}
      size="sm"
    />
  );
};
