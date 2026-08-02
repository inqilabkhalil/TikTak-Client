"use client";

import { useRef } from "react";
import { BannerCard } from "@/features/landing/components/BannerCard";
import type { Banner } from "@/features/landing/types";
import styles from "./HeroBanner.module.css";

interface HeroBannerCarouselProps {
  banners: Banner[];
}

export const HeroBannerCarousel = ({ banners }: HeroBannerCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth
      : container.clientWidth / 2;

    container.scrollBy({
      left: direction === "next" ? cardWidth + 16 : -(cardWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`${styles.navBtn} ${styles.navBtnPrev}`}
        aria-label="Əvvəlki"
        onClick={() => scrollByCard("prev")}
      >
        ‹
      </button>

      <div className={styles.bannerGrid} ref={scrollRef}>
        {banners.map((banner) => (
          <div key={banner.id} className={styles.slide}>
            <BannerCard banner={banner} />
          </div>
        ))}
      </div>

      <button
        className={`${styles.navBtn} ${styles.navBtnNext}`}
        aria-label="Növbəti"
        onClick={() => scrollByCard("next")}
      >
        ›
      </button>
    </>
  );
};
