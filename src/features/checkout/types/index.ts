import { StaticImageData } from "next/image";

export type PaymentMethod = "CASH" | "CARD";

export type CheckoutStep = "form" | "success";

export interface CheckoutRequest {
  paymentMethod: PaymentMethod;
  note: string;
  address: string;
  phone: string;
}

export interface OrderProduct {
  id: string | number;
  name: string;
  quantity: number;
  price: number;
}


export interface OrderSummaryData {
  products: OrderProduct[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}


export interface UseCountdownReturn {
  formattedTime: string;
  isFinished: boolean;
  seconds: number;
  reset: () => void;
}


export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  duration?: number;
}

export interface PaymentMethodProps {
  value: PaymentMethod;              
  onChange: (method: PaymentMethod) => void;   
}

export interface PaymentOption {
  id: PaymentMethod;
  label: string;
  icon: StaticImageData;
}

export interface SuccessScreenProps {
  title?: string;
  description?: string;
}

export interface CheckoutUserInfo {
  name: string;
  address: string;
  phone: string;
}

export interface UserInfoDisplayProps {
  user: CheckoutUserInfo;
}

export interface OrderSummaryProps {
  data: OrderSummaryData;
}

export interface OrderSummaryProps {
  data: OrderSummaryData;
}

export interface CheckoutFormValues {
  note: string;
  paymentMethod: PaymentMethod;
}

export interface CheckoutFormProps {
  user: CheckoutUserInfo;
  onSubmit: (values: CheckoutFormValues) => void;
}