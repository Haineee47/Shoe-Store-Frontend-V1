import type { ProductCardDTO } from "@/features/product/types/product.types";

export interface CartItem {
  product: ProductCardDTO;
  quantity: number;
  selectedSize: number;
  selectedColor: string;
}

export interface CartState {
  items: CartItem[];
}