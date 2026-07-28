import { StatCard } from '@/Features/landing/components/StatCard';
import { STATS } from '@/Features/landing/constants';
import styles from './StatsSection.module.css';

export const StatsSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Bizim göstəricilər</h2>
      <p className={styles.subtitle}>
        Biz yeni imkanlar axtarırıq və digərlərinin bilmədikləri yerlərə getməyə
        hazırıq.
      </p>

      <div className={styles.grid}>
        {STATS.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
};
