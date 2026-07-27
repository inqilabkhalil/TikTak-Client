import styles from "./StatsSection.module.css";

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { id: 1, value: "137", label: "Market sayı", icon: "🏪" },
  { id: 2, value: "11", label: "Region", icon: "🗺️" },
  { id: 3, value: "5000+", label: "Məhsul sayı", icon: "🛒" },
  { id: 4, value: "5500+", label: "Əməkdaş sayı", icon: "👤" },
];

export const StatsSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Bizim göstəricilər</h2>
      <p className={styles.subtitle}>
        Biz yeni imkanlar axtarırıq və digərlərinin bilmədikləri yerlərə
        getməyə hazırıq.
      </p>

      <div className={styles.grid}>
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({ stat }: { stat: Stat }) => {
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