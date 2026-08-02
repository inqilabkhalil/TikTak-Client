import type { Metadata } from "next";
import { OrderSuccessPage } from "@/views/OrderSuccessPage";

export const metadata: Metadata = {
  title: "Sifariş qəbul edildi | TikTak",
  description: "Sifarişiniz uğurla qəbul edildi.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ orderNumber?: string }>;
}) {
  const { orderNumber } = await searchParams;

  return <OrderSuccessPage orderNumber={orderNumber} />;
}
