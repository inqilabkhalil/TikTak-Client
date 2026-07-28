import { OfferCard } from '@/Features/landing/components/OfferCard';
import { OFFERS } from '@/Features/landing/constants';
import styles from './SpecialOffers.module.css';

export const SpecialOffers = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Xüsusi təkliflər!</h2>
      <p className={styles.subtitle}>
        TikTak-da hər gün üçün super təklifləri qaçırmayın!
      </p>

      <div className={styles.grid}>
        {OFFERS.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
};
