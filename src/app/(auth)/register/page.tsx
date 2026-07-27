import type { Metadata } from "next";
import { RegisterPage } from "@/views/RegisterPage";

export const metadata: Metadata = {
  title: "Qeydiyyat | TikTak",
  description: "TikTak-da yeni hesab yaradın.",
};

export default function Page() {
  return <RegisterPage />;
}
