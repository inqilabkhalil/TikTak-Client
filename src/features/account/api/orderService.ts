import { api } from '@/shared/services';
import { OrderItem } from '../types';

export const orderService = {
  // Sifarişlərin siyahısını çəkmək üçün
  async getOrders(): Promise<OrderItem[]> {
    const response = await api.get('/orders'); // Backend-dəki sifarişlər endpoint-i
    return response.data;
  },
};