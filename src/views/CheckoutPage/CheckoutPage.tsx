"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { OrderSummary } from "@/features/checkout/components/OrderSummary";
import { ConfirmModal } from "@/features/checkout/components/ConfirmModal";
import { CheckoutForm } from "@/features/checkout/components/CheckoutForm/CheckoutForm";
import { useCheckout } from "@/features/checkout/hooks";
import {
  mapUserToCheckoutInfo,
  mapBasketToSummary,
} from "@/features/checkout/utils";
import { useProfileStore } from "@/shared/store/profileStore";
import { useBasketStore } from "@/shared/store";
import { ROUTES } from "@/shared/constants";
import styles from "./CheckoutPage.module.css";

export const CheckoutPage = () => {
  const router = useRouter();
  const { user, isInitialized } = useProfileStore();
  const { items, total, fetchBasket, isLoading: isBasketLoading } =
    useBasketStore();

  const checkoutUser = useMemo(
    () =>
      user
        ? mapUserToCheckoutInfo(user)
        : { name: "", address: "", phone: "" },
    [user]
  );

  const summaryData = useMemo(
    () => mapBasketToSummary(items, total),
    [items, total]
  );

  const {
    isModalOpen,
    isLoading,
    error,
    handleFormSubmit,
    handleConfirm,
    handleCancel,
  } = useCheckout({ user: checkoutUser });

  useEffect(() => {
    if (isInitialized && user) {
      fetchBasket();
    }
  }, [isInitialized, user, fetchBasket]);

  useEffect(() => {
    if (isInitialized && !user) {
      router.replace(ROUTES.LOGIN);
    }
  }, [isInitialized, user, router]);

  useEffect(() => {
    if (isInitialized && user && !isBasketLoading && items.length === 0) {
      router.replace(ROUTES.BASKET ?? "/basket");
    }
  }, [isInitialized, user, isBasketLoading, items.length, router]);

  if (!isInitialized || !user) {
    return <div className={styles.container}>Yüklənir...</div>;
  }

  if (isBasketLoading || items.length === 0) {
    return <div className={styles.container}>Yüklənir...</div>;
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