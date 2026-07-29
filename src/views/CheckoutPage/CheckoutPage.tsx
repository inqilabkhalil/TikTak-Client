'use client';

import { OrderSummary } from '@/features/checkout/components/OrderSummary';
import { ConfirmModal } from '@/features/checkout/components/ConfirmModal';
import { SuccessScreen } from '@/features/checkout/components/SuccessScreen';
import { useCheckout } from '@/Features/checkout/hooks';
import { MOCK_USER, MOCK_SUMMARY } from './mockData';
import styles from './CheckoutPage.module.css';
import { CheckoutForm } from '@/features/checkout/components/CheckoutForm/CheckoutForm';

export const CheckoutPage = () => {
  const { step, isModalOpen, handleFormSubmit, handleConfirm, handleCancel } =
    useCheckout();

  if (step === 'success') {
    return <SuccessScreen />;
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.breadcrumb}>Ana səhifə / Meyvələr</p>
        <div className={styles.headerRow}>
          <h2 className={styles.formTitle}>Sifarişin tamamlanması</h2>
          <h2 className={styles.summaryTitle}>Xülasə</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.formSection}>
            <h2 className={styles.mobileTitle}>Sifarişin tamamlanması</h2>
            <CheckoutForm user={MOCK_USER} onSubmit={handleFormSubmit} />
          </div>

          <div className={styles.summarySection}>
            <h2 className={styles.mobileTitle}>Xülasə</h2>
            <OrderSummary data={MOCK_SUMMARY} />
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        duration={180}
      />
    </>
  );
};
