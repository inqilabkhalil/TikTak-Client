export interface ProductApiCategory {
  id: number;
  name: string;
}

export interface ProductApiItem {
  id: number;
  title: string;
  img_url: string;
  description: string;
  price: string;
  type: string;
  created_at: string;
  category: ProductApiCategory;
}

export interface ProductListApiResponse {
  message: string;
  data: ProductApiItem[];
  result?: boolean;
}

export interface Product {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  price: number;
  type: string;
  categoryId: number;
  categoryName: string;
  createdAt: string;
}

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  getProductsByCategory: (categoryId: number) => Product[];
  getProductById: (id: number) => Product | undefined;
}
