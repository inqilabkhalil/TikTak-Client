import api from '@/shared/services/api';
import { CategoryListApiResponse, Category } from '@/shared/types/category.types';
import { adaptCategories } from '@/shared/utils/categoryAdapter';

export const categoryService = {
  getCategories: async (): Promise<Category[]> => {
    const response = await api.get<CategoryListApiResponse>('/categories');
    return adaptCategories(response.data.data);
  },
};
