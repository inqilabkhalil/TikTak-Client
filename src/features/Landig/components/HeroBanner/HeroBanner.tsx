"use client";
import Image from "next/image";
import styles from "./HeroBanner.module.css";

const banners = [
  {
    id: 1,
    title: "TikTak Club",
    subtitle: "Alış-verişdə yeni həyəcan!",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80",
    theme: "green",
  },
  {
    id: 2,
    title: "TikTak-da Yeni il endirimləri",
    subtitle: "26 dekabr - 8 yanvar", 
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&q=80",
    theme: "red",
  },
];

export const HeroBanner = () => {
  return (
    <section className={styles.wrapper}>
      <button className={styles.navBtn} aria-label="Əvvəlki">‹</button>

      <div className={styles.bannerGrid}>
        {banners.map((b) => (
          <div key={b.id} className={styles.card}>
            <Image
              src={b.image}
              alt={b.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.bgImage}
              priority
            />

            <div className={`${styles.overlay} ${styles[b.theme]}`} />

            <span className={styles.brandBadge}>TIK TAK</span>

            <div className={styles.text}>
              <h3>{b.title}</h3>
              <p>{b.subtitle}</p>
              <button className={styles.moreBtn}>Ətraflı</button>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.navBtn} aria-label="Növbəti">›</button>
    </section>
  );
};