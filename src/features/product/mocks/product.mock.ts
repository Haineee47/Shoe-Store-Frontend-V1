import type { ProductCardDTO } from "@/features/product/types/product.types";

export const featuredProducts: ProductCardDTO[] = [
  {
    id: 1,
    slug: "urban-leather-sneaker-black",
    name: "Urban Leather Sneaker",
    category: "Sneaker",
    gender: "MEN",
    price: 1299000,
    originalPrice: 1599000,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    hoverImageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    rating: 4.9,
    reviewCount: 128,
    badge: "BEST_SELLER",
    availableSizes: [39, 40, 41, 42, 43],
    availableColors: ["Đen", "Trắng"],
  },
  {
    id: 2,
    slug: "classic-white-sneaker",
    name: "Classic White Sneaker",
    category: "Sneaker",
    gender: "UNISEX",
    price: 999000,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    rating: 4.8,
    reviewCount: 96,
    badge: "NEW",
    availableSizes: [38, 39, 40, 41, 42],
    availableColors: ["Trắng"],
  },
  {
    id: 3,
    slug: "women-elegant-loafer",
    name: "Elegant Leather Loafer",
    category: "Loafer",
    gender: "WOMEN",
    price: 1199000,
    originalPrice: 1399000,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    rating: 4.7,
    reviewCount: 73,
    badge: "SALE",
    availableSizes: [35, 36, 37, 38, 39],
    availableColors: ["Nâu", "Đen"],
  },
  {
    id: 4,
    slug: "sport-runner",
    name: "Performance Runner",
    category: "Running",
    gender: "MEN",
    price: 1499000,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    rating: 4.9,
    reviewCount: 211,
    badge: "BEST_SELLER",
    availableSizes: [39, 40, 41, 42, 43, 44],
    availableColors: ["Xám", "Đen", "Xanh"],
  },
];