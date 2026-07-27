import { HeroBanner } from "@/features/Landing/components/HeroBanner";
import { SpecialOffers } from "@/features/Landing/components/SpecialOffers";
import { StatsSection } from "@/features/Landing/components/StatsSection";
import { Footer } from "@/shared/components/Footer";
import styles from "./LandingPage.module.css";

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