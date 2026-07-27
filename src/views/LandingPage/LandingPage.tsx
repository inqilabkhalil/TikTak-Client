"use client";

import { HeroBanner } from "@/features/Landing/components/HeroBanner/HeroBanner";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <HeroBanner />
    </div>
  );
};

export default LandingPage;