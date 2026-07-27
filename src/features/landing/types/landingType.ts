export type BannerTheme = "green" | "red";

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  theme: BannerTheme;
  href: string;
}

export interface Offer {
  id: number;
  title: string;
  date: string;
  image: string;
  href: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface BannerCardProps {
  banner: Banner;
}

export interface OfferCardProps {
  offer: Offer;
}

export interface StatCardProps {
  stat: Stat;
}
