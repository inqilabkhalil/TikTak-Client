import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { CategoryDetailPage } from '@/views/CategoryDetailPage';
import { categoryService } from '@/shared/services/categoryService';
import { productService } from '@/shared/services/productService';
import { STORAGE_KEYS } from '@/features/auth/constants';
import { ROUTES } from '@/shared/constants';

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cookieStore = await cookies();
  const token = cookieStore.get(STORAGE_KEYS.ACCESS_TOKEN)?.value;

  if (!token) {
    redirect(ROUTES.LOGIN);
  }

  const categories = await categoryService.getCategories(token);
  const products = await productService.getProducts(token);

  return (
    <CategoryDetailPage
      categorySlug={slug}
      categories={categories}
      products={products}
    />
  );
}
