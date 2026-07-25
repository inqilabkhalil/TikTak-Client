import Link from "next/link";
import Image from "next/image";
import notFoundImage from "@/shared/assets/404.png";
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.heading}>404</h1>

        <div className={styles.illustrationWrapper}>
          <Image
            src={notFoundImage}
            alt="Səhifə tapılmadı"
            className={styles.illustration}
            priority
          />
        </div>

        <p className={styles.text}>
          Səhifə tapılmadı, deyəsən bir problem baş verib!
        </p>

        <Link href="/" className={styles.button}>
          Geri qayıt
        </Link>
      </div>
    </main>
  );
};
