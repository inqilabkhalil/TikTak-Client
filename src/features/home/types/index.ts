import type { StaticImageData } from "next/image";

export interface CategoryItem {
  id: string;
  title: string;
  image?: StaticImageData;
}
