import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="bg-stone-950 text-white overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-24">
        {/* Khối chữ */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            New Collection 2026
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Bước đi tự tin.
            <span className="block text-amber-400">Sống đúng phong cách.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-stone-300 md:text-lg">
            Khám phá bộ sưu tập giày dép hiện đại, chất liệu cao cấp và thiết kế
            dành cho mọi hành trình của bạn.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="rounded-xl bg-amber-500 px-7 py-4 text-center font-black text-stone-950 hover:bg-amber-400 transition"
            >
              Mua ngay
            </Link>

            <Link
              to="/sale"
              className="rounded-xl border border-stone-600 px-7 py-4 text-center font-black text-white hover:border-white transition"
            >
              Xem ưu đãi
            </Link>
          </div>
        </div>

        {/* Khối Ảnh - Đã sửa thuộc tính giúp khống chế kích thước hoàn hảo */}
        <div className="w-full flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Bộ sưu tập giày mới"
            fetchPriority="high"
            className="w-full max-w-[500px] h-auto max-h-[400px] md:max-h-[500px] rounded-3xl object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}