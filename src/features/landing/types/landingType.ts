// src/features/landing/types/index.ts
import type { StaticImageData } from 'next/image';

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  theme: 'green' | 'red' | string;
}

export interface Offer {
  id: number;
  title: string;
  date: string;
  image: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: StaticImageData;
}

export interface StatCardProps {
  stat: Stat;
}

export interface BannerSlideProps {
  banner: Banner;
  href: string;
  priority: boolean;
}

export interface OfferTileProps {
  offer: Offer;
  href: string;
}

export interface CampaignsViewProps {
  banners: Banner[];
  offers: Offer[];
}