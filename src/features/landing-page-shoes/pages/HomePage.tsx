import { Link } from "react-router-dom";
import { ProductCard } from "@/core/components/ProductCard";
import { HeroSection } from "../components/HeroSection"; // 1. Import HeroSection vào đây
import { featuredProducts } from "@/features/product/mocks/product.mock";

const categories = [
  {
    title: "Giày Nam",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    path: "/men",
  },
  {
    title: "Giày Nữ",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    path: "/women",
  },
  {
    title: "Sneaker",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    path: "/sneaker",
  },
  {
    title: "Running",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    path: "/running",
  },
];

export function HomePage() {
  return (
    <>
      {/* 2. Gọi HeroSection thay cho khối thẻ <section> đầu tiên cũ */}
      <HeroSection />

      {/* Các phần bên dưới giữ nguyên 100% */}
      <section className="bg-amber-500 py-5">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 text-center text-sm font-bold text-stone-950 md:grid-cols-4">
          <p>✓ Miễn phí vận chuyển đơn từ 500.000₫</p>
          <p>✓ Đổi size trong 7 ngày</p>
          <p>✓ Bảo hành chính hãng</p>
          <p>✓ Thanh toán khi nhận hàng</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        {/* ... giữ nguyên toàn bộ các section danh mục, best seller, review bên dưới ... */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Danh mục</p>
            <h2 className="mt-2 text-3xl font-black text-stone-900">Chọn phong cách của bạn</h2>
          </div>
          <Link to="/products" className="text-sm font-bold text-stone-700 hover:text-amber-600">Xem tất cả →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.title} to={category.path} className="group relative overflow-hidden rounded-2xl">
              <img src={category.image} alt={category.title} loading="lazy" className="h-72 w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-2xl font-black text-white">{category.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Best Seller</p>
            <h2 className="mt-2 text-3xl font-black text-stone-900">Sản phẩm được yêu thích nhất</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickAdd={(sp) => console.log(sp)} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">Summer Sale</p>
            <h2 className="mt-3 text-4xl font-black">Giảm đến 40% cho bộ sưu tập mùa hè</h2>
            <p className="mt-5 text-stone-300">Số lượng ưu đãi có hạn. Khám phá các mẫu sneaker, sandal và loafer đang được giảm giá.</p>
            <Link to="/sale" className="mt-7 inline-block rounded-xl bg-amber-500 px-7 py-4 font-black text-stone-950 hover:bg-amber-400">Khám phá ưu đãi</Link>
          </div>
          <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3" alt="Khuyến mãi" loading="lazy" className="h-80 w-full rounded-3xl object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Đánh giá khách hàng</p>
          <h2 className="mt-2 text-3xl font-black text-stone-900">Khách hàng nói gì về chúng tôi</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { name: "Minh Anh", content: "Giày đẹp hơn hình, đi cả ngày vẫn rất êm chân." },
            { name: "Quang Huy", content: "Giao hàng nhanh, tư vấn size chính xác, sẽ mua lại." },
            { name: "Ngọc Trâm", content: "Thiết kế đẹp, đóng gói cẩn thận và chất lượng tốt." }
          ].map((review) => (
            <article key={review.name} className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-lg text-amber-500">★★★★★</p>
              <p className="mt-4 leading-7 text-stone-700">“{review.content}”</p>
              <p className="mt-5 font-bold text-stone-900">{review.name}</p>
              <p className="text-sm text-stone-500">Khách hàng đã mua hàng</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-amber-500 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-black text-stone-950">Nhận ưu đãi mới nhất</h2>
          <p className="mt-3 text-stone-800">Đăng ký email để nhận mã giảm giá và thông tin bộ sưu tập mới.</p>
          <form className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="Nhập email của bạn" className="flex-1 rounded-xl border border-transparent px-4 py-4 outline-none focus:border-stone-900" />
            <button type="submit" className="rounded-xl bg-stone-950 px-6 py-4 font-bold text-white hover:bg-stone-800">Đăng ký</button>
          </form>
        </div>
      </section>
    </>
  );
}