import { StaticImageData } from "next/image";

export type PaymentMethodType = "CASH" | "CARD";

export type OrderStatus = "PENDING" | "CONFIRMED" | "DELIVERED" | "CANCELLED";

export interface CheckoutRequest {
  paymentMethod: PaymentMethodType;
  note: string;
  address: string;
  phone: string;
}

export interface ApiCategory {
  id: number;
  name: string;
  img_url: string;
  description: string;
  created_at: string;
}

export interface ApiProduct {
  id: number;
  title: string;
  img_url: string;
  description: string;
  price: string;
  type: string;
  created_at: string;
  category: ApiCategory;
}

export interface ApiOrderItem {
  id: number;
  quantity: number;
  total_price: string;
  product: ApiProduct;
}

export interface ApiOrder {
  id: number;
  orderNumber: string;
  total: string;
  deliveryFee: string;
  paymentMethod: PaymentMethodType;
  status: OrderStatus;
  note: string;
  address: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  items: ApiOrderItem[];
}

export interface ApiResponse<T> {
  message: string;
  data: T;
  result: boolean;
}

export type CheckoutResponse = ApiResponse<ApiOrder>;

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
  isLoading?: boolean;
}

export interface PaymentMethodProps {
  value: PaymentMethodType;
  onChange: (method: PaymentMethodType) => void;
}

export interface PaymentOption {
  id: PaymentMethodType;
  label: string;
  icon: StaticImageData;
}

export interface SuccessScreenProps {
  title?: string;
  description?: string;
  orderNumber?: string;
  redirectTo?: string;
  redirectDuration?: number;
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

export interface CheckoutFormValues {
  note: string;
  paymentMethod: PaymentMethodType;
}

export interface CheckoutFormProps {
  user: CheckoutUserInfo;
  onSubmit: (values: CheckoutFormValues) => void;
  isLoading?: boolean;
  error?: string | null;
}

export interface CheckoutState {
  order: ApiOrder | null;
  isLoading: boolean;
  error: string | null;

  createOrder: (payload: CheckoutRequest) => Promise<ApiOrder | null>;
  resetOrder: () => void;
}

export interface UseCheckoutProps {
  user: CheckoutUserInfo;
}

export interface UseSuccessRedirectProps {
  redirectTo: string;
  duration?: number;
}

export interface UseSuccessRedirectReturn {
  secondsLeft: number;
}


export interface RedirectCountdownProps {
  redirectTo: string;
  duration?: number;
}