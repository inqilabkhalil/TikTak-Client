import Image from "next/image";
import Link from "next/link";
import styles from "./SpecialOffers.module.css";

interface Offer {
  id: number;
  title: string;
  date: string;
  image: string;
  href: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Qeyri-qidaya endirim!",
    date: "12 dekabr - 8 yanvar",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    href: "/",
  },
  {
    id: 2,
    title: "TikTak-da Yeni il endirimləri",
    date: "26 dekabr 2024 - 8 yanvar 2025",
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1200&q=80",
    href: "/",
  },
];

export const SpecialOffers = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Xüsusi təkliflər!</h2>
      <p className={styles.subtitle}>
        TikTak-da hər gün üçün super təklifləri qaçırmayın!
      </p>

      <div className={styles.grid}>
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
};

const OfferCard = ({ offer }: { offer: Offer }) => {
  const { title, date, image, href } = offer;

  return (
    <Link href={href} className={styles.card}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles.bgImage}
      />

      <div className={styles.overlay} />

      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </Link>
  );
};