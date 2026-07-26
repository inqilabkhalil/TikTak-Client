'use client';

import Image from 'next/image';
import { Button } from '@/shared/components/Button/Button';
import moneyIcon from '@/shared/assets/money.png';
import cardIcon from '@/shared/assets/card.png';
import type {
  PaymentMethodProps,
  PaymentOption,
} from '@/Features/checkout/types';
import styles from './PaymentMethod.module.css';

const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: 'CASH',
    label: 'Qapıda nağd ödəmə',
    icon: moneyIcon,
  },
  {
    id: 'CARD',
    label: 'Qapıda kart ilə ödəmə',
    icon: cardIcon,
  },
];

export const PaymentMethod = ({ value, onChange }: PaymentMethodProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Ödəmə metodu seçin:</p>

      <div className={styles.options}>
        {PAYMENT_OPTIONS.map((option) => {
          const isSelected = value === option.id;

          return (
            <Button
              key={option.id}
              onClick={() => onChange(option.id)}
              className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            >
              <div className={styles.iconWrapper}>
                <Image
                  src={option.icon}
                  alt={option.label}
                  width={40}
                  height={40}
                  priority
                />
              </div>

              <span className={styles.text}>{option.label}</span>

              <div className={styles.radio}>
                {isSelected && <div className={styles.radioInner} />}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
