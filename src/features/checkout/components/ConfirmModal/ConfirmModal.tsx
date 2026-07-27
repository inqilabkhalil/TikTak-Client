'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { Modal } from '@/shared/components/Modal';
import { Button } from '@/shared/components/Button/Button';
import { useCountdown } from '@/Features/checkout/hooks';
import type { ConfirmModalProps } from '@/Features/checkout/types';
import clockIcon from '@/shared/assets/clock.png';
import styles from './ConfirmModal.module.css';

export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  duration = 180,
}: ConfirmModalProps) => {
  const { formattedTime, reset } = useCountdown(duration, onClose, isOpen);

  useEffect(() => {
    if (isOpen) reset();
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <Image src={clockIcon} alt="Clock" width={160} height={160} />
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Sifarişinizi təsdiqləyin</h2>
          <p className={styles.subtitle}>
            vaxtın bitməsinə {formattedTime} qaldı
          </p>
        </div>

        <div className={styles.buttons}>
          <Button onClick={onConfirm} className={styles.confirmButton}>
            Təsdiqlə
          </Button>

          <Button
            color="#FFFFFF"
            onClick={onClose}
            className={styles.cancelButton}
          >
            İndi yox
          </Button>
        </div>
      </div>
    </Modal>
  );
};
