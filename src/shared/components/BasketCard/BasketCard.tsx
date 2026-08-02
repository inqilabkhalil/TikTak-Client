'use client';

import { EmptyBasket } from './EmptyBasket';
import { BasketSummary } from './BasketSummary';
import { useBasket } from '@/shared/store';

export const BasketCard = () => {
  const { items } = useBasket();

  if (!items.length) {
    return <EmptyBasket />;
  }

  return <BasketSummary items={items} />;
};
