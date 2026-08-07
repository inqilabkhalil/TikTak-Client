import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ProductDetailPage } from '@/views/ProductDetailPage';
import { categoryService } from '@/shared/services/categoryService';
import { productService } from '@/shared/services/productService';
import { STORAGE_KEYS } from '@/features/auth/constants';
import { ROUTES } from '@/shared/constants';

export const metadata: Metadata = {
  title: 'Məhsul | TikTak',
};

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const cookieStore = await cookies();
  const token = cookieStore.get(STORAGE_KEYS.ACCESS_TOKEN)?.value;

  if (!token) {
    redirect(ROUTES.LOGIN);
  }

  const categories = await categoryService.getCategories(token);
  const products = await productService.getProducts(token);

  return (
    <ProductDetailPage
      productId={Number(id)}
      categories={categories}
      products={products}
    />
  );
}
