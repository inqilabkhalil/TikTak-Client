import styles from './BasketCard.module.css';
import emptyBasket from '../../assets/empty-basket.png.png';

export const EmptyBasket = () => {
  return (
    <div className={styles.container}>
      <div className={styles.emptyBasket}>
        <img
          src={emptyBasket.src}
          alt="Empty Basket"
          className={styles.emptyImage}
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
