import { FiX } from 'react-icons/fi';
import styles from './EmptyCategoryState.module.css';

export const EmptyCategoryState = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconCircle}>
        <FiX className={styles.icon} />
      </div>
      <p className={styles.text}>Bu kateqoriyada məhsul yoxdur</p>
    </div>
  );
};
