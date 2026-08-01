"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCheckoutStore } from "@/features/checkout/store";
import { useBasketStore } from "@/features/Basket/store";
import type {
  CheckoutFormValues,
  UseCheckoutProps,
} from "@/features/checkout/types";

export const useCheckout = ({ user }: UseCheckoutProps) => {
  const router = useRouter();
  const { createOrder, isLoading, error, resetOrder } = useCheckoutStore();
  const { clearBasket } = useBasketStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState<CheckoutFormValues | null>(null);

  const handleFormSubmit = (values: CheckoutFormValues) => {
    setFormValues(values);
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    if (!formValues) return;

    const order = await createOrder({
      paymentMethod: formValues.paymentMethod,
      note: formValues.note,
      address: user.address,
      phone: user.phone,
    });

    setIsModalOpen(false);

    if (order) {
      await clearBasket();
      resetOrder();
      router.push(`/order-success?orderNumber=${order.orderNumber}`);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    isLoading,
    error,
    handleFormSubmit,
    handleConfirm,
    handleCancel,
  };
};