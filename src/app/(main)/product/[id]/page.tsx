import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetailPage } from '@/views/ProductDetailPage';
import { getProductById } from '@/shared/data/catalog';

export const metadata: Metadata = {
  title: 'Məhsul | TikTak',
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetailPage productId={product.id} />;
}
