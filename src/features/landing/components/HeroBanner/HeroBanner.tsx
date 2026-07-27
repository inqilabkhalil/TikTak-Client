import { BannerCard } from "@/features/landing/components/BannerCard";
import { BANNERS } from "@/features/landing/constants";
import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <section className={styles.wrapper}>
      <button className={styles.navBtn} aria-label="Əvvəlki">
        ‹
      </button>

      <div className={styles.bannerGrid}>
        {BANNERS.map((banner) => (
          <BannerCard key={banner.id} banner={banner} />
        ))}
      </div>

      <button className={styles.navBtn} aria-label="Növbəti">
        ›
      </button>
    </section>
  );
};
