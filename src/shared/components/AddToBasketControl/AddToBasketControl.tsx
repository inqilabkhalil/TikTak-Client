'use client';

import { Button } from '@/shared/components/Button';
import { QuantityStepper } from '@/shared/components/QuantityStepper';
import { useMockBasketStore as useBasketStore } from '@/shared/components/BasketCard/mockBasketStore';
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
  const items = useBasketStore((state) => state.items);
  const addItem = useBasketStore((state) => state.addItem);
  const decreaseItem = useBasketStore((state) => state.decreaseItem);
  const quantity = items.find((item) => item.productId === id)?.quantity ?? 0;

  const handleAdd = () => addItem(id, { name: title, price, image });

  if (!inStock) {
    return (
      <Button disabled color="#d1d5db" className={styles.button}>
        Səbətə əlavə et
      </Button>
    );
  }

  if (quantity === 0) {
    return (
      <Button className={styles.button} onClick={handleAdd}>
        Səbətə əlavə et
      </Button>
    );
  }

  return (
    <QuantityStepper
      value={quantity}
      unitLabel={unitLabel}
      onIncrement={handleAdd}
      onDecrement={() => decreaseItem(id)}
      size="sm"
    />
  );
};
