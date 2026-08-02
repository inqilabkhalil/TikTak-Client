import moneyIcon from '@/shared/assets/money.png';
import cardIcon from '@/shared/assets/card.png';
import type { PaymentOption } from '@/features/checkout/types';

export const PAYMENT_OPTIONS: PaymentOption[] = [
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
