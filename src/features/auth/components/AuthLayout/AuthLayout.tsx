import { Logo } from "@/shared/components/Logo";
import Image from "next/image";
import styles from "./AuthLayout.module.css";
import loginImage from "@/shared/assets/login.svg";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Logo />
        <Image
          src={loginImage}
          alt="Strawberry"
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.rightSide}>{children}</div>
    </div>
  );
};
