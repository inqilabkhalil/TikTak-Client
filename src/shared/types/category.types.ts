export interface CategoryApiItem {
  id: number;
  name: string;
  img_url: string;
  description: string;
  created_at: string;
}

export interface CategoryListApiResponse {
  message: string;
  data: CategoryApiItem[];
  result?: boolean;
}

export interface Category {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  createdAt: string;
}

export interface CategoryState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;

  fetchCategories: () => Promise<void>;
}
