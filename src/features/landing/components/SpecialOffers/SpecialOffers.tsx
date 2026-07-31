// src/features/landing/components/SpecialOffers/SpecialOffers.tsx
'use client';

import { useEffect, useMemo } from 'react';
import { OfferCard } from '@/features/landing/components/OfferCard';
import { useCampaignStore } from '@/features/landing/store';
import type { Offer } from '@/features/landing/types';
import styles from './SpecialOffers.module.css';

export const SpecialOffers = () => {
  const { campaigns, loading, fetchCampaigns } = useCampaignStore();

  useEffect(() => {
    // Əgər HeroBanner artıq çağırıbsa, yenidən çağırmayacaq (store cache edir)
    if (!campaigns.length) fetchCampaigns();
  }, [campaigns.length, fetchCampaigns]);

  const offers: Offer[] = useMemo(() => {
    return campaigns.slice(0, 2).map((c) => ({
      id: c.id,
      title: c.title,
      date: new Date(c.created_at).toLocaleDateString('az-AZ'),
      image: c.img_url,
    }));
  }, [campaigns]);

  if (loading) return <div>Yüklənir...</div>;

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Xüsusi təkliflər!</h2>
      <p className={styles.subtitle}>
        TikTak-da hər gün üçün super təklifləri qaçırmayın!
      </p>

      <div className={styles.grid}>
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
};