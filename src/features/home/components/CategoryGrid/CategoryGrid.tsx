import Link from "next/link";
import { Card } from "@/shared/components/Card";
import { CATEGORIES } from "../../constants/categories";
import styles from "./CategoryGrid.module.css";

export const CategoryGrid = () => {
  return (
    <div className={styles.grid}>
      {CATEGORIES.map((category) => (
        <Link key={category.id} href={`/category/${category.id}`} className={styles.link}>
          <Card image={category.image} title={category.title} />
        </Link>
      ))}
    </div>
  );
};
