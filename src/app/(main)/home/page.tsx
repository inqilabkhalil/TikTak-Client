import type { Metadata } from "next";
import { HomePage } from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Ana səhifə | TikTak",
  description: "TikTak-da məhsulları kəşf edin və sifariş verin.",
};

export default function Page() {
  return <HomePage />;
}
