import { UserInfoDisplayProps } from "../../types";
import styles from "./UserInfoDisplay.module.css";

export const UserInfoDisplay = ({ user }: UserInfoDisplayProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <p className={styles.label}>Adınız</p>
        <p className={styles.value}>{user.name}</p>
      </div>

      <div className={styles.infoBlock}>
        <p className={styles.label}>Ünvanınız</p>
        <p className={styles.value}>{user.address}</p>
      </div>

      <div className={styles.infoBlock}>
        <p className={styles.label}>Telefon nömrəniz</p>
        <p className={styles.value}>{user.phone}</p>
      </div>
    </div>
  );
};
