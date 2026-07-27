import mapPinIcon from "@/shared/assets/map-pin.svg";
import mapIcon from "@/shared/assets/map.svg";
import shoppingBagIcon from "@/shared/assets/shopping-bag.svg";
import usersIcon from "@/shared/assets/users.svg";
import type { Stat } from "@/features/landing/types";

export const STATS: Stat[] = [
  { id: 1, value: "137", label: "Market sayı", icon: mapPinIcon },
  { id: 2, value: "11", label: "Region", icon: mapIcon },
  { id: 3, value: "5000+", label: "Məhsul sayı", icon: shoppingBagIcon },
  { id: 4, value: "5500+", label: "Əməkdaş sayı", icon: usersIcon },
];
