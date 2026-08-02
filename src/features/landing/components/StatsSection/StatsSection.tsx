import { StatCard } from '@/features/landing/components/StatCard';
import { STATS } from '@/features/landing/constants';
import styles from './StatsSection.module.css';

export const StatsSection = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="stats-heading">
      <h2 id="stats-heading" className={styles.title}>
        Bizim göstəricilər
      </h2>
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
