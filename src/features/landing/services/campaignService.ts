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

// Server Component-lərdən çağırılır — browser-only `localStorage`-a etibar edən
// paylaşılan axios instance-ından asılı deyil, ona görə həm serverdə, həm client-də işləyir.
export const campaignService = {
  getList: async (): Promise<CampaignApiResponse[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/campaigns`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Campaigns sorğusu uğursuz oldu: ${res.status}`);
    }

    const json: CampaignListResponse = await res.json();
    return json.data;
  },
};
