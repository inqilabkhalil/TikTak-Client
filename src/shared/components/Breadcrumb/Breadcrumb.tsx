import styles from "./Breadcrumb.module.css";

interface BreadcrumbProps {
  items: string[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      {items.join(" / ")}
    </nav>
  );
};
