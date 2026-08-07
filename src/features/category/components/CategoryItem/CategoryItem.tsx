import Link from 'next/link';
import type { CategoryItemProps } from '../../types';
import styles from './CategoryItem.module.css';

export const CategoryItem = ({ title, href, active = false }: CategoryItemProps) => {
  return (
    <Link href={href} className={`${styles.item} ${active ? styles.active : ''}`}>
      {title}
    </Link>
  );
};
