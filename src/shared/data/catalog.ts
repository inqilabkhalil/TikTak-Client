import type { StaticImageData } from 'next/image';
import apple from '@/shared/assets/alma.png';

export type Category = {
  slug: string;
  name: string;
};

export type Product = {
  id: number;
  categorySlug: string;
  title: string;
  price: number;
  image: StaticImageData;
  inStock: boolean;
  description: string;
};

const PLACEHOLDER_DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

export const CATEGORIES: Category[] = [
  { slug: 'meyveler', name: 'Meyvələr' },
  { slug: 'terevezler', name: 'Tərəvəzlər' },
  { slug: 'qis-meyveleri', name: 'Qış meyvələri' },
  { slug: 'dietik-batonlar', name: 'Dietik batonlar' },
  { slug: 'xleb', name: 'Xleb' },
  { slug: 'diabetik-mehsullar', name: 'Diabetik məhsullar' },
  { slug: 'dietik-ickiler', name: 'Dietik içkilər' },
  { slug: 'qlutensiz-mehsullar', name: 'Qlütensiz məhsullar' },
];

export const PRODUCTS: Product[] = [
  // Meyvələr
  { id: 1, categorySlug: 'meyveler', title: 'Qırmızı alma', price: 3.3, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 2, categorySlug: 'meyveler', title: 'Yaşıl alma', price: 4, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 3, categorySlug: 'meyveler', title: 'Golden alma', price: 5, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 4, categorySlug: 'meyveler', title: 'Fuji alma', price: 4.5, image: apple, inStock: false, description: PLACEHOLDER_DESCRIPTION },
  { id: 5, categorySlug: 'meyveler', title: 'Qırmızı alma', price: 3.3, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 6, categorySlug: 'meyveler', title: 'Yaşıl alma', price: 4, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 7, categorySlug: 'meyveler', title: 'Golden alma', price: 5, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 8, categorySlug: 'meyveler', title: 'Fuji alma', price: 4.5, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },

  // Tərəvəzlər
  { id: 9, categorySlug: 'terevezler', title: 'Pomidor 1 kq', price: 2.8, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 10, categorySlug: 'terevezler', title: 'Xiyar 1 kq', price: 2.2, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 11, categorySlug: 'terevezler', title: 'Kartof 1 kq', price: 1.5, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 12, categorySlug: 'terevezler', title: 'Soğan 1 kq', price: 1.2, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },

  // Qış meyvələri
  { id: 13, categorySlug: 'qis-meyveleri', title: 'Portağal 1 kq', price: 3.0, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 14, categorySlug: 'qis-meyveleri', title: 'Mandarin 1 kq', price: 3.5, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },

  // Dietik batonlar
  { id: 15, categorySlug: 'dietik-batonlar', title: 'Proteinli baton', price: 2.9, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 16, categorySlug: 'dietik-batonlar', title: 'Musli baton', price: 2.4, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },

  // Xleb
  { id: 17, categorySlug: 'xleb', title: 'Tam buğda çörəyi', price: 1.8, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 18, categorySlug: 'xleb', title: 'Çovdar çörəyi', price: 2.1, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },

  // Diabetik məhsullar
  { id: 19, categorySlug: 'diabetik-mehsullar', title: 'Şəkərsiz mürəbbə', price: 4.2, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 20, categorySlug: 'diabetik-mehsullar', title: 'Stevia', price: 5.0, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },

  // Dietik içkilər
  { id: 21, categorySlug: 'dietik-ickiler', title: 'Şəkərsiz limonad', price: 1.6, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },
  { id: 22, categorySlug: 'dietik-ickiler', title: 'Detoks su', price: 2.0, image: apple, inStock: true, description: PLACEHOLDER_DESCRIPTION },

  // Qlütensiz məhsullar — intentionally empty to demo the empty-category state
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  CATEGORIES.find((category) => category.slug === slug);

export const getProductsByCategory = (categorySlug: string): Product[] =>
  PRODUCTS.filter((product) => product.categorySlug === categorySlug);

export const getProductById = (id: number): Product | undefined =>
  PRODUCTS.find((product) => product.id === id);

export const searchProducts = (query: string, limit = 6): Product[] => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  return PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(normalized),
  ).slice(0, limit);
};
