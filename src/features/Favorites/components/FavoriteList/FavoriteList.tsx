import { FavoriteCard } from '../FavoriteCard';
import styles from './FavoriteList.module.css';

interface FavoriteItem {
  id: string;
  title: string;
  price: number;
  emoji: string;
}

interface FavoriteListProps {
  favorites: FavoriteItem[];
}

export const FavoriteList = ({ favorites }: FavoriteListProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Sevimlilər</h2>

      {favorites.length > 0 && (
        <div className={styles.grid}>
          {favorites.map((favorite) => (
            <FavoriteCard
              key={favorite.id}
              title={favorite.title}
              price={favorite.price}
              emoji={favorite.emoji}
              className={styles.card}
            />
          ))}
        </div>
      )}
    </section>
  );
};
