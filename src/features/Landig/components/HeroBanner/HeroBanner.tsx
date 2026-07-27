import Image from "next/image";
import Link from "next/link";
import styles from "./HeroBanner.module.css";

type BannerTheme = "green" | "red";

interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  theme: BannerTheme;
  href: string;
}

const banners: Banner[] = [
  {
    id: 1,
    title: "TikTak Club",
    subtitle: "Alış-verişdə yeni həyəcan!",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80",
    theme: "green",
    href: "/",
  },
  {
    id: 2,
    title: "TikTak-da Yeni il endirimləri",
    subtitle: "26 dekabr - 8 yanvar",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&q=80",
    theme: "red",
    href: "/",
  },
];