import { Product } from "./product.types";

export interface SearchDropdownProps {
  loading: boolean;
  products: Product[];
  onResultClick: (id: number) => void;
}
