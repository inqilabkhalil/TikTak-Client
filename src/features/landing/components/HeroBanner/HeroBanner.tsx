// src/features/landing/components/HeroBanner/HeroBanner.tsx
'use client';

import { useEffect, useMemo } from 'react';
import { HeroBannerCarousel } from './HeroBannerCarousel';
import { useCampaignStore } from '@/features/landing/store';
import type { Banner } from '@/features/landing/types';
import styles from './HeroBanner.module.css';

export const HeroBanner = () => {
  const { campaigns, loading, fetchCampaigns } = useCampaignStore();

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  // API cavabını Banner formatına çevir
  const banners: Banner[] = useMemo(() => {
    return campaigns.map((c, index) => ({
      id: c.id,
      title: c.title,
      subtitle: c.description,
      image: c.img_url,
      theme: index % 2 === 0 ? 'green' : 'red', // növbələşən tema
    }));
  }, [campaigns]);

  if (loading) return <div>Yüklənir...</div>;
  if (!banners.length) return null;

  return (
    <section className={styles.wrapper}>
      <HeroBannerCarousel banners={banners} />
    </section>
  );
};