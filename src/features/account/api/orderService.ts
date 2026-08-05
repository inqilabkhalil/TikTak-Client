import { api } from '@/shared/services';
import { OrderItem } from '../types';

export const orderService = {
  // Sifarişlərin siyahısını çəkmək üçün
 async getOrders(): Promise<OrderItem[]> {
  const response = await api.get("/orders/user");

    console.log("DATA:", response.data);
return response.data.data;}
  }
