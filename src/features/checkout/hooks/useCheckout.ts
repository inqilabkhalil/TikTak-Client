"use client";

import { useState } from "react";
import type {
  CheckoutFormValues,
  CheckoutStep,
} from "@/features/checkout/types";

export const useCheckout = () => {
  const [step, setStep] = useState<CheckoutStep>("form");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState<CheckoutFormValues | null>(null);

  /**
   * sifaris tamamlananda acilandi
   */
  const handleFormSubmit = (values: CheckoutFormValues) => {
    setFormValues(values);
    setIsModalOpen(true);
  };

  /**
   tesdiqle duymesine basanda
   */
  const handleConfirm = () => {
    console.log("✅ Sifariş göndərildi:", formValues);
    setIsModalOpen(false);
    setStep("success");
  };

  /**
   * İndi yox düyməsinə basanda
   */
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    step,
    isModalOpen,
    handleFormSubmit,
    handleConfirm,
    handleCancel,
  };
};