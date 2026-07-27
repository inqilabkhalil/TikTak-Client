"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/shared/components/Header";
import { PageTransition } from "@/shared/components/PageTransition";
import styles from "./layout.module.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/landing";

  return (
    <div className={styles.wrapper}>
      <Header showPlace={!isLandingPage} showInput={!isLandingPage} />
      <main className={styles.content}>
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  );
}
