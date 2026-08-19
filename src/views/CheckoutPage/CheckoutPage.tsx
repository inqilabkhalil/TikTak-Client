"use client";

import { OrderSummary } from "@/features/checkout/components/OrderSummary";
import dynamic from "next/dynamic";
import { CheckoutForm } from "@/features/checkout/components/CheckoutForm/CheckoutForm";
import { useCheckout, useCheckoutGuard } from "@/features/checkout/hooks";
import {
  mapUserToCheckoutInfo,
  mapBasketToSummary,
} from "@/features/checkout/utils";
import { useBasketStore } from "@/shared/store";
import { Loader } from "@/shared/components/Loader";
import styles from "./CheckoutPage.module.css";

const ConfirmModal = dynamic(
  () =>
    import("@/features/checkout/components/ConfirmModal").then(
      (mod) => mod.ConfirmModal,
    ),
  { ssr: false },
);

export const CheckoutPage = () => {
  const { user, isReady } = useCheckoutGuard();

  const items = useBasketStore((s) => s.items);
  const total = useBasketStore((s) => s.total);
  const checkoutUser = user ? mapUserToCheckoutInfo(user) : null;
  const summaryData = mapBasketToSummary(items, total);

  const {
    isModalOpen,
    isLoading,
    error,
    handleFormSubmit,
    handleConfirm,
    handleCancel,
  } = useCheckout({
    user: checkoutUser ?? { name: "", address: "", phone: "" },
  });

  if (!isReady || !checkoutUser) {
    return <Loader />;
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
            <CheckoutForm
              user={checkoutUser}
              onSubmit={handleFormSubmit}
              isLoading={isLoading}
              error={error}
            />
          </div>

          <div className={styles.summarySection}>
            <h2 className={styles.mobileTitle}>Xülasə</h2>
            <OrderSummary data={summaryData} />
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        duration={180}
        isLoading={isLoading}
      />
    </>
  );
};
