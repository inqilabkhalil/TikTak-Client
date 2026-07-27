import { HeroBanner } from "@/features/Landing/components/HeroBanner/HeroBanner";
import { SpecialOffers } from "@/features/Landing/components/SpecialOffers/SpecialOffers";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <HeroBanner />
      <SpecialOffers />
    </div>
  );
};