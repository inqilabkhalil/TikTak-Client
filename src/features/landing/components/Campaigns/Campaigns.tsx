import { campaignService } from '@/features/landing/services';
import { CampaignsView } from './CampaignsView';
import type { Banner, Offer } from '@/features/landing/types';

export const Campaigns = async () => {
  let campaigns: Awaited<ReturnType<typeof campaignService.getList>> = [];

  try {
    campaigns = await campaignService.getList();
  } catch (error) {
    console.error('❌ Campaign fetch error:', error);
  }

  // API cavabını Banner formatına çevir
  const banners: Banner[] = campaigns.map((c, index) => ({
    id: c.id,
    title: c.title,
    subtitle: c.description,
    image: c.img_url,
    theme: index % 2 === 0 ? 'green' : 'red', // növbələşən tema
  }));

  // Offers üçün fərqli campaign-lər istifadə et (təkrar olmasın)
  const offers: Offer[] = campaigns.slice(2, 4).map((c) => ({
    id: c.id,
    title: c.title,
    date: new Date(c.created_at).toLocaleDateString('az-AZ'),
    image: c.img_url,
  }));

  return <CampaignsView banners={banners} offers={offers} />;
};