import type { Metadata } from "next";
import { LoginPage } from "@/views/LoginPage";

export const metadata: Metadata = {
  title: "Giriş | TikTak",
  description: "TikTak hesabınıza daxil olun.",
};

export default function Page() {
  return <LoginPage />;
}
