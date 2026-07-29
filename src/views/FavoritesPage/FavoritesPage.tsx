import { FavoriteList } from '@/features/Favorites';
import { BasketCard } from '@/shared/components/BasketCard';
import appleImage from '@/shared/assets/alma.png';
import strawberryImage from '@/shared/assets/strawberry.png';
import styles from './FavoritesPage.module.css';

const favorites = [
  { id: 101, title: 'Banan', price: 4.99, image: appleImage },
  { id: 102, title: 'Alma', price: 2.5, image: appleImage },
  { id: 103, title: 'Çiyələk', price: 8.2, image: strawberryImage },
];

export const FavoritesPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.favoritesColumn}>
        <FavoriteList favorites={favorites} />
      </div>

      <div className={styles.cartColumn}>
        <BasketCard />
      </div>
    </div>
  );
};
