import { EmptyStateIcon } from './EmptyStateIcon';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  title?: string;
  description?: string;
  iconSize?: number;
}

export const EmptyState = ({ 
  title, 
  description, 
  iconSize = 200 
}: EmptyStateProps) => {
  return (
    <div className={styles.container}>
      <EmptyStateIcon size={iconSize} />
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};