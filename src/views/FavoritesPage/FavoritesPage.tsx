import { FavoriteList } from '@/features/Favorites';
import styles from './FavoritesPage.module.css';

export const FavoritesPage = () => {
  return (
    <div className={styles.page}>
      <FavoriteList />
    </div>
  );
};
