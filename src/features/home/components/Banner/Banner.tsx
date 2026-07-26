import Image from "next/image";
import strawberryImage from "@/shared/assets/strawberry.png";
import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.imageWrapper}>
        <Image
          src={strawberryImage}
          alt="Çiyələk"
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.textBlock}>
        <p className={styles.heading}>Onlayn sifariş et</p>
        <div className={styles.countdown}>
          <span className={styles.number}>15</span>
          <span className={styles.subtitle}>
            dəqiqəyə
            <br />
            qapında
          </span>
        </div>
      </div>
    </section>
  );
};
