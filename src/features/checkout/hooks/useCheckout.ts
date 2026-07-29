'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CheckoutFormValues } from '@/features/checkout/types';

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

export const useCheckout = () => {
  const router = useRouter();
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
    console.log('Sifariş göndərildi:', formValues);
    setIsModalOpen(false);
    const orderNumber = generateOrderNumber();
    router.push(`/order-success?orderNumber=${orderNumber}`);
  };

  /**
   * İndi yox düyməsinə basanda
   */
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    handleFormSubmit,
    handleConfirm,
    handleCancel,
  };
};
