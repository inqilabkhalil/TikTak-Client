import { Logo } from "@/shared/components/Logo";
import Image from "next/image";
import loginImage from "@/shared/assets/login.svg";
import styles from "./AuthLayout.module.css";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={loginImage}
            alt="Strawberry"
            className={styles.image}
            priority
            fill
          />
        </div>
      </div>

      <div className={styles.rightSide}>{children}</div>
    </div>
  );
};