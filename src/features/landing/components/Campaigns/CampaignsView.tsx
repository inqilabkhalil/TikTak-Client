'use client';

import { memo, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthAwareHref } from '@/features/landing/hooks';
import type { Banner, Offer } from '@/features/landing/types';
import styles from './Campaigns.module.css';

interface BannerSlideProps {
  banner: Banner;
  href: string;
  priority: boolean;
}

const BannerSlide = memo(({ banner, href, priority }: BannerSlideProps) => (
  <div className={styles.slide}>
    <div className={styles.bannerCard}>
      {banner.image ? (
        <Image
          src={banner.image}
          alt={banner.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.bannerBgImage}
          priority={priority}
        />
      ) : (
        <div className={styles.imagePlaceholder} aria-hidden="true">
          TIK TAK
        </div>
      )}

      <div className={`${styles.bannerOverlay} ${styles[banner.theme]}`} />

      <span className={styles.brandBadge}>TIK TAK</span>

      <div className={styles.bannerText}>
        <h3>{banner.title}</h3>
        <p>{banner.subtitle}</p>
        <Link href={href} className={styles.moreBtn}>
          Ətraflı
        </Link>
      </div>
    </div>
  </div>
));
BannerSlide.displayName = 'BannerSlide';

interface OfferTileProps {
  offer: Offer;
  href: string;
}

const OfferTile = memo(({ offer, href }: OfferTileProps) => (
  <Link href={href} className={styles.offerCard}>
    {offer.image ? (
      <Image
        src={offer.image}
        alt={offer.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles.offerBgImage}
      />
    ) : (
      <div className={styles.imagePlaceholder} aria-hidden="true">
        TIK TAK
      </div>
    )}

    <div className={styles.offerOverlay} />

    <div className={styles.offerText}>
      <h3>{offer.title}</h3>
      <p>{offer.date}</p>
    </div>
  </Link>
));
OfferTile.displayName = 'OfferTile';

interface CampaignsViewProps {
  banners: Banner[];
  offers: Offer[];
}

export const CampaignsView = ({ banners, offers }: CampaignsViewProps) => {
  const moreHref = useAuthAwareHref();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: 'prev' | 'next') => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth
      : container.clientWidth / 2;

    container.scrollBy({
      left: direction === 'next' ? cardWidth + 16 : -(cardWidth + 16),
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {banners.length > 0 && (
        <section className={styles.heroWrapper} aria-labelledby="campaigns-heading">
          <h2 id="campaigns-heading" className={styles.srOnly}>
            Kampaniyalar
          </h2>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            aria-label="Əvvəlki"
            onClick={() => scrollByCard('prev')}
          >
            ‹
          </button>

          <div className={styles.bannerGrid} ref={scrollRef}>
            {banners.map((banner, index) => (
              <BannerSlide
                key={banner.id}
                banner={banner}
                href={moreHref}
                priority={index === 0}
              />
            ))}
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            aria-label="Növbəti"
            onClick={() => scrollByCard('next')}
          >
            ›
          </button>
        </section>
      )}

      <section className={styles.offersWrapper} aria-labelledby="offers-heading">
        <h2 id="offers-heading" className={styles.title}>
          Xüsusi təkliflər!
        </h2>
        <p className={styles.subtitle}>
          TikTak-da hər gün üçün super təklifləri qaçırmayın!
        </p>

        <div className={styles.grid}>
          {offers.map((offer) => (
            <OfferTile key={offer.id} offer={offer} href={moreHref} />
          ))}
        </div>
      </section>
    </>
  );
};
