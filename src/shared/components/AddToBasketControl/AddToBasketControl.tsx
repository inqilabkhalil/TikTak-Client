'use client';

import { useState } from 'react';
import { message } from 'antd';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Button } from '@/shared/components/Button';
import { useBasketStore } from '@/shared/store';
import styles from './AddToBasketControl.module.css';

interface AddToBasketControlProps {
  id: number;
  image: string;
  title: string;
  price: number;
  inStock: boolean;
  unitLabel?: string;
}

export const AddToBasketControl = ({ id, inStock, unitLabel }: AddToBasketControlProps) => {
  const addItem = useBasketStore((state) => state.addItem);
  const decreaseItem = useBasketStore((state) => state.decreaseItem);
  const quantity = useBasketStore(
    (state) => state.items.find((item) => item.productId === id)?.quantity ?? 0,
  );
  const [isBusy, setIsBusy] = useState(false);

  if (!inStock) {
    return (
      <Button disabled color="#d1d5db" className={styles.button}>
        Səbətə əlavə et
      </Button>
    );
  }

  const runAction = async (action: () => Promise<void>) => {
    setIsBusy(true);
    await action();
    const { error } = useBasketStore.getState();
    if (error) {
      message.error(error);
      useBasketStore.getState().clearError();
    }
    setIsBusy(false);
  };

  const handleAdd = () =>
    runAction(async () => {
      await addItem(id);
      if (!useBasketStore.getState().error) {
        message.success('Məhsul səbətə əlavə edildi');
      }
    });

  const handleIncrease = () => runAction(() => addItem(id));
  const handleDecrease = () => runAction(() => decreaseItem(id));

  if (quantity > 0) {
    return (
      <div className={styles.stepper}>
        <button
          type="button"
          className={styles.stepperMinus}
          aria-label="Sayı azalt"
          disabled={isBusy}
          onClick={handleDecrease}
        >
          <FiMinus size={16} />
        </button>

        <span className={styles.stepperValue}>
          {quantity}
          {unitLabel ? ` ${unitLabel}` : ''}
        </span>

        <button
          type="button"
          className={styles.stepperPlus}
          aria-label="Sayı artır"
          disabled={isBusy}
          onClick={handleIncrease}
        >
          <FiPlus size={16} />
        </button>
      </div>
    );
  }

  return (
    <Button
      className={styles.button}
      loading={isBusy}
      onClick={handleAdd}
    >
      Səbətə əlavə et
    </Button>
  );
};
