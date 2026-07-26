import { Header } from "@/shared/components/Header";
import styles from "./layout.module.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
