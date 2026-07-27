import { CategoryItem } from '../CategoryItem';
import styles from './CategoryList.module.css';

const categories = [
  'Meyvələr',
  'Tərəvəzlər',
  'Qış meyvələri',
  'Dietik batonlar',
  'Xleb',
  'Diabetik məhsullar',
  'Dietik içkilər',
  'Qlütensiz məhsullar',
];

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Kateqoriyalar</h3>

      <div className={styles.list}>
        {categories.map((category, index) => (
          <CategoryItem key={category} title={category} active={index === 0} />
        ))}
      </div>
    </div>
  );
};
