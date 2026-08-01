import Image from "next/image";
import { RedirectCountdown } from "./RedirectCountdown";
import type { SuccessScreenProps } from "@/features/checkout/types";
import successIcon from "@/shared/assets/success.png";
import styles from "./SuccessScreen.module.css";

export const SuccessScreen = ({
  title = "Sifariş uğurla tamamlandı",
  description = "Əməkdaşlarımız sizinlə əlaqə saxlayıb sifarişinizi göndərəcəklər.",
  orderNumber,
  redirectTo,
  redirectDuration = 5,
}: SuccessScreenProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <Image src={successIcon} alt="Success" width={140} height={140} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {orderNumber && (
          <p className={styles.orderNumber}>Sifariş nömrəsi: #{orderNumber}</p>
        )}
        {redirectTo && (
          <RedirectCountdown
            redirectTo={redirectTo}
            duration={redirectDuration}
          />
        )}
      </div>
    </div>
  );
};
