import styles from './CategoryItem.module.css';

interface CategoryItemProps {
  title: string;
  active?: boolean;
}

export const CategoryItem = ({ title, active = false }: CategoryItemProps) => {
  return (
    <button className={`${styles.item} ${active ? styles.active : ''}`}>
      {title}
    </button>
  );
};
