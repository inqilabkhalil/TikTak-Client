import { HeroBanner } from '@/Features/landing/components/HeroBanner';
import { SpecialOffers } from '@/Features/landing/components/SpecialOffers';
import { StatsSection } from '@/Features/landing/components/StatsSection';
import { Footer } from '@/shared/components/Footer';
import styles from './LandingPage.module.css';

export const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <HeroBanner />
      <SpecialOffers />
      <StatsSection />
      <Footer />
    </div>
  );
};
