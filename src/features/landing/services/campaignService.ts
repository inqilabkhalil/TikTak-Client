import api from '../../../shared/services/api';

// API-dən gələn bir kampaniyanın tipi
export interface CampaignApiResponse {
  id: number;
  title: string;
  description: string;
  img_url: string;
  created_at: string;
}

// Tam response tipi
export interface CampaignListResponse {
  message: string;
  data: CampaignApiResponse[];
  result: boolean;
}

// Service obyekti
export const campaignService = {
  getList: async (): Promise<CampaignApiResponse[]> => {
    const response = await api.get<CampaignListResponse>('/campaigns');
    return response.data.data;
  },
};