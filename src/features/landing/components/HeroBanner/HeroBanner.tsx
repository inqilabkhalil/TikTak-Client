import { HeroBannerCarousel } from "./HeroBannerCarousel";
import { BANNERS } from "@/features/landing/constants";
import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <section className={styles.wrapper}>
      <HeroBannerCarousel banners={BANNERS} />
    </section>
  );
};
