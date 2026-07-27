import Image from "next/image";
import Link from "next/link";
import styles from "./HeroBanner.module.css";

type BannerTheme = "green" | "red";

interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  theme: BannerTheme;
  href: string;
}

const banners: Banner[] = [
  {
    id: 1,
    title: "TikTak Club",
    subtitle: "Alış-verişdə yeni həyəcan!",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80",
    theme: "green",
    href: "/",
  },
  {
    id: 2,
    title: "TikTak-da Yeni il endirimləri",
    subtitle: "26 dekabr - 8 yanvar",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&q=80",
    theme: "red",
    href: "/",
  },
];

export const HeroBanner = () => {
  return (
    <section className={styles.wrapper}>
      <button className={styles.navBtn} aria-label="Əvvəlki">
        ‹
      </button>

      <div className={styles.bannerGrid}>
        {banners.map((banner) => (
          <BannerCard key={banner.id} banner={banner} />
        ))}
      </div>

      <button className={styles.navBtn} aria-label="Növbəti">
        ›
      </button>
    </section>
  );
};

const BannerCard = ({ banner }: { banner: Banner }) => {
  const { title, subtitle, image, theme, href } = banner;

  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles.bgImage}
        priority
      />

      <div className={`${styles.overlay} ${styles[theme]}`} />

      <span className={styles.brandBadge}>TIK TAK</span>

      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <Link href={href} className={styles.moreBtn}>
          Ətraflı
        </Link>
      </div>
    </div>
  );
};