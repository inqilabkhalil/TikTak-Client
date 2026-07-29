import Link from 'next/link';
import styles from './CategoryItem.module.css';

interface CategoryItemProps {
  title: string;
  href: string;
  active?: boolean;
}

export const CategoryItem = ({ title, href, active = false }: CategoryItemProps) => {
  return (
    <Link href={href} className={`${styles.item} ${active ? styles.active : ''}`}>
      {title}
    </Link>
  );
};
