import Image from 'next/image';
import styles from './BasketCard.module.css';
import emptyBasket from '../../assets/empty-basket.png';

export const EmptyBasket = () => {
  return (
    <div className={styles.container}>
      <div className={styles.emptyBasket}>
        <Image
          src={emptyBasket}
          alt="Empty Basket"
          className={styles.emptyImage}
          width={140}
          height={140}
        />

        <h3>Səbətiniz boşdur</h3>

        <p>
          Sifariş vermək üçün
          <br />
          səbətinizə məhsul əlavə edin
        </p>
      </div>
    </div>
  );
};
