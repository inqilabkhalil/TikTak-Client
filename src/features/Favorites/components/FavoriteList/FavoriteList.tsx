import type { StaticImageData } from 'next/image';
import { FavoriteCard } from '../FavoriteCard';
import styles from './FavoriteList.module.css';

interface FavoriteItem {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
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
              id={favorite.id}
              title={favorite.title}
              price={favorite.price}
              image={favorite.image}
              className={styles.card}
            />
          ))}
        </div>
      )}
    </section>
  );
};
