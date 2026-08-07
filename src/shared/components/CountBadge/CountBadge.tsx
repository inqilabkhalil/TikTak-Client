import styles from './CountBadge.module.css';

interface CountBadgeProps {
  count: number;
}

export const CountBadge = ({ count }: CountBadgeProps) => {
  if (count === 0) {
    return null;
  }

  return (
    <span className={styles.badge}>{count > 99 ? '99+' : count}</span>
  );
};
