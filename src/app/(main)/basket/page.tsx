import type { Metadata } from "next";
import { BasketPage } from "@/views/BasketPage";

export const metadata: Metadata = {
  title: "Səbətim | TikTak",
  description: "Səbətinizdəki məhsullara baxın və sifarişi tamamlayın.",
};

export default function Page() {
  return <BasketPage />;
}
