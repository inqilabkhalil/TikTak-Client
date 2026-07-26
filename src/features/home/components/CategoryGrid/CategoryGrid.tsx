import { Card } from "@/shared/components/Card";
import { CATEGORIES } from "../../constants/categories";
import styles from "./CategoryGrid.module.css";

export const CategoryGrid = () => {
  return (
    <div className={styles.grid}>
      {CATEGORIES.map((category) => (
        <Card key={category.id} image={category.image} title={category.title} />
      ))}
    </div>
  );
};
