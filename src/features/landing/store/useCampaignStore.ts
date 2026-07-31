import { create } from 'zustand';
import { campaignService, type CampaignApiResponse } from '../services';

interface CampaignStore {
  campaigns: CampaignApiResponse[];
  loading: boolean;
  error: string | null;
  hasFetched: boolean;
  fetchCampaigns: () => Promise<void>;
}

export const useCampaignStore = create<CampaignStore>((set, get) => ({
  campaigns: [],
  loading: false,
  error: null,
  hasFetched: false,

  fetchCampaigns: async () => {
    // 2 dəfə çağırılmasın
    if (get().hasFetched || get().loading) return;

    set({ loading: true, error: null });
    try {
      const data = await campaignService.getList();
      set({ campaigns: data, loading: false, hasFetched: true });
    } catch (error) {
      console.error('❌ Campaign fetch error:', error);
      set({
        error: error instanceof Error ? error.message : 'Xəta baş verdi',
        loading: false,
      });
    }
  },
}));