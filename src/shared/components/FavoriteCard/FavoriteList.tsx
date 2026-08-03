import type { Product } from '@/shared/types/product.types';
import { FavoriteCard } from './FavoriteCard';
import { EmptyFavorites } from './EmptyFavorites';
import styles from './FavoriteList.module.css';

interface FavoriteListProps {
  favorites: Pick<Product, 'id' | 'title' | 'price' | 'imgUrl'>[];
}

export const FavoriteList = ({ favorites }: FavoriteListProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Sevimlilər</h2>

      {favorites.length > 0 ? (
        <div className={styles.grid}>
          {favorites.map((favorite) => (
            <FavoriteCard
              key={favorite.id}
              id={favorite.id}
              title={favorite.title}
              price={favorite.price}
              imgUrl={favorite.imgUrl}
              className={styles.card}
            />
          ))}
        </div>
      ) : (
        <EmptyFavorites />
      )}
    </section>
  );
};
