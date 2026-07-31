import { BasketItem } from './BasketItem';
import type { BasketItemType } from './types';
import styles from './BasketCard.module.css';

type BasketListProps = {
  items: BasketItemType[];
};

export const BasketList = ({ items }: BasketListProps) => (
  <div className={styles.items}>
    {items.map((item) => (
      <BasketItem key={item.id} item={item} />
    ))}
  </div>
);
