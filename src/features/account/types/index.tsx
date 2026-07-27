export interface OrderItem {
  key: string;
  no: string;
  date: string;
  address: string;
  quantity: number;
  total: string;
  status: "Tamamlandı" | "Ləğv edildi" | "Sifariş verildi" | "Gözləyir";
}


export interface ProductItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: string;
}

 export interface OrderDetailsProps {
  orderId: string;
  orderDate: string;
  address: string;
  products: ProductItem[];
}

 export interface PersonalInfoFormValues {
  name: string;
  phone: string;
  email: string;
  address: string;
  newPassword?: string;
  confirmPassword?: string;
}