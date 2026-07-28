import Image from 'next/image';
import discountBanner from '../../assets/category.png.png';
import styles from './DiscountBanner.module.css';

export const DiscountBanner = () => {
  return (
    <div className={styles.container}>
      <Image
        src={discountBanner}
        alt="Meyvələrə endirim"
        className={styles.image}
        priority
      />
    </div>
  );
};
