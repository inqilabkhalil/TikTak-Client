import { CategoryDetailPage } from '@/views/CategoryDetailPage';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <CategoryDetailPage categorySlug={slug} />;
}
