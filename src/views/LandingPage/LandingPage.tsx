import { Campaigns } from '@/features/landing/components/Campaigns';
import { StatsSection } from '@/features/landing/components/StatsSection';
import { Footer } from '@/shared/components/Footer';
import styles from './LandingPage.module.css';

export const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Campaigns />
      <StatsSection />
      <Footer />
    </div>
  );
};
