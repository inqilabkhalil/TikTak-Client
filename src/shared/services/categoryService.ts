import api from '@/shared/services/api';
import { CategoryListApiResponse, Category } from '@/shared/types/category.types';
import { adaptCategories } from '@/shared/utils/categoryAdapter';

export const categoryService = {
  // token yalnız server komponentlərindən çağırılanda ötürülür (client sorğularında
  // axios interceptor onu cookies-dən özü əlavə edir)
  getCategories: async (token?: string): Promise<Category[]> => {
    const response = await api.get<CategoryListApiResponse>('/categories', {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return adaptCategories(response.data.data);
  },
};
