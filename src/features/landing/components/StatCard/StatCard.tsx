import type { StatCardProps } from "@/features/landing/types";
import styles from "./StatCard.module.css";

export const StatCard = ({ stat }: StatCardProps) => {
  const { value, label, icon } = stat;

  return (
    <div className={styles.card}>
      <span className={styles.value}>{value}</span>
      <div className={styles.bottom}>
        <span className={styles.label}>{label}</span>
        <span className={styles.icon}>{icon}</span>
      </div>
    </div>
  );
};
