import type { Metadata } from "next";
import { CheckoutPage } from "@/views/CheckoutPage";

export const metadata: Metadata = {
  title: "Sifarişin tamamlanması | TikTak",
  description: "Sifarişinizi təsdiqləyin və çatdırılma məlumatlarını daxil edin.",
};

export default function Page() {
  return <CheckoutPage />;
}
