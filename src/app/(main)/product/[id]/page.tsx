import type { Metadata } from 'next';
import { ProductDetailPage } from '@/views/ProductDetailPage';

export const metadata: Metadata = {
  title: 'Məhsul | TikTak',
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetailPage productId={Number(id)} />;
}
