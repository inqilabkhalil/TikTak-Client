import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/shared/components/Card';
import type { CategoryGridProps } from '../../types';
import styles from './CategoryGrid.module.css';

export const CategoryGrid = ({ categories }: CategoryGridProps) => {
  return (
    <div className={styles.grid}>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.id}`}
          className={styles.link}
        >
          <Card className={styles.card}>
            <div className={styles.imageWrapper}>
              {category.imgUrl ? (
                <Image
                  src={category.imgUrl}
                  alt={category.name}
                  className={styles.image}
                  width={120}
                  height={120}
                />
              ) : (
                <div className={styles.imagePlaceholder} />
              )}
            </div>
            <span className={styles.title}>{category.name}</span>
          </Card>
        </Link>
      ))}
    </div>
  );
};
