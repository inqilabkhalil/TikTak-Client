import { EmptyBasket } from './EmptyBasket';
import { BasketSummary } from './BasketSummary';
import type { BasketItemType } from './types';

type BasketCardProps = {
  items?: BasketItemType[];
};

export const BasketCard = ({ items = [] }: BasketCardProps) => {
  if (!items.length) {
    return <EmptyBasket />;
  }

  return <BasketSummary items={items} />;
};
