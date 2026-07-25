"use client";

import { useEffect } from "react";
import { ModalProps } from "@/shared/types";
import styles from "./Modal.module.css";

export const Modal = ({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};