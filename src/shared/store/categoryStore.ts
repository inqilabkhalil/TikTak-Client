import axios from 'axios';
import { create } from 'zustand';
import { categoryService } from '@/shared/services/categoryService';
import { CATEGORY_MESSAGES } from '@/shared/constants/category.constants';
import type { Category, CategoryState } from '@/shared/types/category.types';

export const useCategoryStore = create<CategoryState>((set) => {
  const executeAction = async (
    action: () => Promise<Category[]>,
    errorMessage: string,
  ) => {
    set({ isLoading: true, error: null });
    try {
      const categories = await action();
      set({ categories, isLoading: false });
    } catch (err: unknown) {
      const message = axios.isAxiosError(err)
        ? ((err.response?.data as { message?: string } | undefined)?.message ?? errorMessage)
        : errorMessage;

      set({ error: message, isLoading: false });
    }
  };

  return {
    categories: [],
    isLoading: false,
    error: null,

    fetchCategories: () =>
      executeAction(
        () => categoryService.getCategories(),
        CATEGORY_MESSAGES.FETCH_ERROR,
      ),
  };
});
