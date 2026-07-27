import type { Metadata } from "next";
import {LandigPage} from "@/views/LandigPage";

export const metadata: Metadata = {
  title: "Kampaniyalar | TikTak",
  description: "TikTak-ın endirim və kampaniyaları.",
};

export default function Page() {
  return <LandigPage />;
}
