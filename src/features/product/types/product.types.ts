export type ProductGender = "MEN" | "WOMEN" | "UNISEX";

export interface ProductCardDTO {
  id: number;
  slug: string;
  name: string;
  category: string;
  gender: ProductGender;

  price: number;
  originalPrice?: number;

  thumbnailUrl: string;
  hoverImageUrl?: string;

  rating: number;
  reviewCount: number;

  badge?: "NEW" | "SALE" | "BEST_SELLER";
  availableSizes: number[];
  availableColors: string[];
}