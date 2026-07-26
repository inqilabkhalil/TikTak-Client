import { FavoriteCard } from '../FavoriteCard';
import styles from './FavoriteList.module.css';

export const FavoriteList = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Sevimlilər</h2>

      <div className={styles.grid}>
        <FavoriteCard title="Banan" price={4.99} />
        <FavoriteCard title="Alma" price={2.5} />
        <FavoriteCard title="Çiyələk" price={8.2} />
      </div>
    </section>
  );
};
