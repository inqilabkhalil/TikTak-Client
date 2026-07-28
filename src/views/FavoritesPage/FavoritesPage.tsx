import {
  BasketList,
  OrderSummary,
  type BasketProduct,
} from '@/features/Basket';
import { FavoriteList } from '@/features/Favorites';
import { EmptyCart } from '@/features/Favorites/components/EmptyCart/EmptyCart';
import styles from './FavoritesPage.module.css';

const favorites = [
  { id: '1', title: 'Banan', price: 4.99, emoji: '🍌' },
  { id: '2', title: 'Alma', price: 2.5, emoji: '🍎' },
  { id: '3', title: 'Çiyələk', price: 8.2, emoji: '🫐' },
];

const cart: BasketProduct[] = [];

export const FavoritesPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.favoritesColumn}>
        <FavoriteList favorites={favorites} />
      </div>

      <div className={styles.cartColumn}>
        <div className={styles.cartCard}>
          <h2 className={styles.cartTitle}>Səbət</h2>

          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <BasketList products={cart} />
              <OrderSummary products={cart} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
