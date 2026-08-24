import { OrderStatus } from "../types/order.types";

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  [OrderStatus.PENDING]: "Gözləyir",
  [OrderStatus.CONFIRMED]: "Təsdiqləndi",
  [OrderStatus.DELIVERED]: "Çatdırıldı",
  [OrderStatus.COMPLETED]: "Tamamlandı",
  [OrderStatus.CANCELLED]: "Ləğv edildi",
};

export const ORDER_STATUS_BADGE_CLASS: Record<OrderStatus, string> = {
  [OrderStatus.PENDING]: "statusPending",
  [OrderStatus.CONFIRMED]: "statusConfirmed",
  [OrderStatus.DELIVERED]: "statusDelivered",
  [OrderStatus.COMPLETED]: "statusCompleted",
  [OrderStatus.CANCELLED]: "statusCancelled",
};

// Backend bəzən status kodu əvəzinə birbaşa Azərbaycanca mətn qaytarır (məs. "Tamamlandı", "Ləğv edildi")
const LEGACY_STATUS_ALIASES: Record<string, OrderStatus> = {
  Tamamlandı: OrderStatus.COMPLETED,
  "Ləğv edildi": OrderStatus.CANCELLED,
};

export function normalizeOrderStatus(status: string): OrderStatus {
  if (LEGACY_STATUS_ALIASES[status]) {
    return LEGACY_STATUS_ALIASES[status];
  }
  return (Object.values(OrderStatus) as string[]).includes(status)
    ? (status as OrderStatus)
    : OrderStatus.PENDING;
}

export function getOrderStatusLabel(status: string): string {
  return ORDER_STATUS_LABELS[normalizeOrderStatus(status)];
}
