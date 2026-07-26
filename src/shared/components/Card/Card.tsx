"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  image?: StaticImageData;
  title?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Card = ({ image, title, onClick, children }: CardProps) => {
  return (
    <button type="button" className={styles.card} onClick={onClick}>
      {children ?? (
        <>
          {image && (
            <div className={styles.imageWrapper}>
              <Image src={image} alt={title ?? ""} className={styles.image} />
            </div>
          )}
          {title && <span className={styles.title}>{title}</span>}
        </>
      )}
    </button>
  );
};
