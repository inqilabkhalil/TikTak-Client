'use client';

import Image, { type StaticImageData } from 'next/image';
import type { KeyboardEvent, ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  image?: StaticImageData;
  title?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export const Card = ({
  image,
  title,
  onClick,
  className,
  children,
}: CardProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={[styles.card, className].filter(Boolean).join(' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
    >
      {children ?? (
        <>
          {image && (
            <div className={styles.imageWrapper}>
              <Image src={image} alt={title ?? ''} className={styles.image} />
            </div>
          )}
          {title && <span className={styles.title}>{title}</span>}
        </>
      )}
    </div>
  );
};
