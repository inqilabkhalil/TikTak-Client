import type { Metadata } from "next";
import { FavoritesPage } from '@/views/FavoritesPage';

export const metadata: Metadata = {
  title: "Siyahılarım | TikTak",
  description: "Seçdiyiniz məhsulların siyahısı.",
};

export default function Page() {
  return <FavoritesPage />;
}
