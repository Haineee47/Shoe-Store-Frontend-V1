import { Link } from "react-router-dom";
import type { ProductCardDTO } from "@/features/product/types/product.types";

interface ProductCardProps {
  product: ProductCardDTO;
  onQuickAdd?: (product: ProductCardDTO) => void;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

export function ProductCard({
  product,
  onQuickAdd,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative overflow-hidden">
          {product.badge && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-stone-950 px-3 py-1 text-xs font-bold text-white">
              {product.badge === "BEST_SELLER"
                ? "Bán chạy"
                : product.badge === "SALE"
                  ? "Giảm giá"
                  : "Mới"}
            </span>
          )}

          <img
            src={product.thumbnailUrl}
            alt={product.name}
            loading="lazy"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            {product.category}
          </p>

          <h3 className="mt-2 line-clamp-1 text-lg font-bold text-stone-900">
            {product.name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm">
            <span className="font-bold text-amber-600">
              ★ {product.rating}
            </span>
            <span className="text-stone-500">
              ({product.reviewCount} đánh giá)
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-lg font-black text-red-600">
              {formatPrice(product.price)}
            </span>

            {product.originalPrice && (
              <span className="text-sm text-stone-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={() => onQuickAdd?.(product)}
          className="w-full rounded-xl bg-stone-900 px-4 py-3 font-bold text-white transition hover:bg-amber-500 hover:text-stone-950"
        >
          Thêm vào giỏ
        </button>
      </div>
    </article>
  );
}