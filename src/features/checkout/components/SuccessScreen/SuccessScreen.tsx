import Image from "next/image";
import { SuccessScreenProps } from "../../types";
import styles from "./SuccessScreen.module.css";
import successIcon from "@/shared/assets/success.png";

export const SuccessScreen = ({
    title = "Sifariş uğurla tamamlandı",
    description = "Əməkdaşlarımız sizinlə əlaqə saxlayıb sifarişinizi göndərəcəklər.",
}: SuccessScreenProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <Image
                src={successIcon}
                alt="Sucess"
                width={140}
                height={140}
                />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    </div>
  )
}
