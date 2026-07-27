import Link from "next/link";
import styles from "./AuthTabs.module.css";
import { AuthTabsProps } from "../../types/authType";


export const AuthTabs = ({ active }: AuthTabsProps) => {
  return (
    <div className={styles.tabs}>
      <Link
        href="./login"
        className={`${styles.tab} ${active === "login" ? styles.tabActive : styles.tabInactive}`}
      >
        Daxil ol
      </Link>
      <Link
        href="./register"
        className={`${styles.tab} ${active === "register" ? styles.tabActive : styles.tabInactive}`}
      >
        Qeydiyyatdan keç
      </Link>
    </div>
  );
};
