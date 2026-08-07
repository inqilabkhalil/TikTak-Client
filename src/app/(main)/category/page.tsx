import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CategoryListPage } from "@/views/CategoryListPage";
import { categoryService } from "@/shared/services/categoryService";
import { STORAGE_KEYS } from "@/features/auth/constants";
import { ROUTES } from "@/shared/constants";

export const metadata: Metadata = {
  title: "Kateqoriyalar | TikTak",
  description: "TikTak-da bütün kateqoriyaları kəşf edin.",
};

export const dynamic = "force-dynamic";

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get(STORAGE_KEYS.ACCESS_TOKEN)?.value;

  if (!token) {
    redirect(ROUTES.LOGIN);
  }

  const categories = await categoryService.getCategories(token);
  return <CategoryListPage categories={categories} />;
}
