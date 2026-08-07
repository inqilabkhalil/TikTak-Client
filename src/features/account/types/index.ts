export interface Product {
  id: number;
  title: string;
  img_url: string;
  description: string;
  price: string;
  type: string;
  created_at: string;
  category: {
    id: number;
    name: string;
    img_url: string;
    description: string;
    created_at: string;
  };
}

export interface OrderProductItem {
  id: number;
  quantity: number;
  total_price: string;
  product: Product;
}

export interface OrderItem {
  id: number;
  orderNumber: string;
  total: string;
  deliveryFee: string;
  paymentMethod: string;
  status: "PENDING" | "COMPLETED" | "CANCELLED" | "Tamamlandı" | "Ləğv edildi"; // Backend-dən gələn statuslara görə
  note: string;
  address: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  items: OrderProductItem[];
}

export interface UserProfile {
  id: number;
  full_name: string;
  phone: string;
  address: string;
  img_url: string;
  role: string;
}

export interface PersonalInfoFormValues {
  name: string;
  phone: string;
  email: string;
  address: string;
  newPassword?: string;
  confirmPassword?: string;
}
