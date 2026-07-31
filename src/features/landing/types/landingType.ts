// src/features/landing/types/index.ts
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

export interface BannerCardProps {
  banner: Banner;
}

export interface OfferCardProps {
  offer: Offer;
}

// ... digərləri