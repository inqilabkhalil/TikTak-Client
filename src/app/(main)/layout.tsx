import styles from "./layout.module.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header} />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
