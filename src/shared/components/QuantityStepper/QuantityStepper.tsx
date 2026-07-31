'use client';

import styles from './QuantityStepper.module.css';

interface QuantityStepperProps {
  value: number;
  unitLabel?: string;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
  size?: 'sm' | 'md';
  layout?: 'pill' | 'split';
}

export const QuantityStepper = ({
  value,
  unitLabel,
  onIncrement,
  onDecrement,
  className,
  size = 'sm',
  layout = 'pill',
}: QuantityStepperProps) => {
  const wrapperClass = [
    styles.stepper,
    styles[size],
    layout === 'split' ? styles.split : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (layout === 'split') {
    return (
      <div className={wrapperClass}>
        <button
          type="button"
          className={styles.minus}
          aria-label="Decrease quantity"
          onClick={onDecrement}
        >
          −
        </button>
        <span className={styles.value}>
          {value}
          {unitLabel ? ` ${unitLabel}` : ''}
        </span>
        <button
          type="button"
          className={styles.plus}
          aria-label="Increase quantity"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <button
        type="button"
        className={styles.minus}
        aria-label="Decrease quantity"
        onClick={onDecrement}
      >
        −
      </button>
      <button
        type="button"
        className={styles.plus}
        aria-label="Increase quantity"
        onClick={onIncrement}
      >
        <span className={styles.value}>
          {value}
          {unitLabel ? ` ${unitLabel}` : ''}
        </span>
        <span className={styles.icon}>+</span>
      </button>
    </div>
  );
};
