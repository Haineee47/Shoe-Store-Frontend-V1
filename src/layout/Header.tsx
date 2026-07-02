import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingCart, Heart } from "lucide-react";
import logo from "@/assets/logo4.png";
import { AccountDropdown } from "@/layout/AccountDropdown";

type NavLinkClassProps = {
  isActive: boolean;
};

const navLinkClass = ({ isActive }: NavLinkClassProps) => {
  return [
    "text-[13px] font-bold tracking-wide uppercase transition-colors py-1 px-2 border-b-2 whitespace-nowrap",
    isActive
      ? "text-red-600 border-red-600"
      : "text-stone-700 border-transparent hover:text-red-600 hover:border-red-600",
  ].join(" ");
};

export function Header() {
  const [cartItemsCount] = useState(0); 
  const [wishlistCount] = useState(0);   

  // 🛠️ QUẢN LÝ TRẠNG THÁI ẨN / HIỆN HEADER
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Nếu đang ở trên cùng trang (vị trí sát top), luôn luôn hiện Header
      if (currentScrollY <= 80) {
        setIsVisible(true);
      } 
      // 2. Nếu cuộn xuống dưới, ẩn Header đi
      else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } 
      // 3. Nếu cuộn ngược lên trên, hiển thị lại Header
      else {
        setIsVisible(true);
      }

      // Lưu lại vị trí cuộn hiện tại cho lần so sánh kế tiếp
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full border-b border-stone-200 bg-white shadow-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        
        {/* HEADER 1 TẦNG DUY NHẤT - Cao h-20 chuẩn chỉnh */}
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* CỤM 1: LOGO KIÊM NÚT TRANG CHỦ */}
          <div className="shrink-0">
            <Link to="/" aria-label="Trang chủ Hoàng Anh" className="block">
              <img
                src={logo}
                alt="Logo Hoàng Anh"
                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* CỤM 2: MENU ĐIỀU HƯỚNG DANH MỤC */}
          <nav aria-label="Điều hướng chính" className="hidden lg:flex items-center justify-center gap-1 xl:gap-3 flex-1 px-4">
            <NavLink to="/products" className={navLinkClass}>Cửa hàng</NavLink>
            <NavLink to="/women" className={navLinkClass}>Giày Nữ</NavLink>
            <NavLink to="/men" className={navLinkClass}>Giày Nam</NavLink>
            <NavLink to="/kids" className={navLinkClass}>Giày Trẻ Em</NavLink>
            <NavLink to="/sale" className={navLinkClass}>Sales</NavLink>
            <NavLink to="/accessories" className={navLinkClass}>Phụ kiện</NavLink>
          </nav>

          {/* CỤM 3: Ô TÌM KIẾM THU GỌN */}
          <form 
            className="relative w-full max-w-[200px] xl:max-w-[240px] hidden md:block"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Bạn cần tìm gì..."
              className="w-full rounded-full border border-stone-300 bg-stone-50 px-4 py-2 pr-9 text-xs outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500"
            />
            <button 
              type="submit" 
              aria-label="Tìm kiếm"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-red-600"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* CỤM 4: ICONS TIỆN ÍCH */}
          <div className="flex items-center gap-4 xl:gap-5 text-stone-700 shrink-0">
            
            {/* 4.1 TÀI KHOẢN */}
            <AccountDropdown />

            {/* 4.2 ICON YÊU THÍCH */}
            <div className="relative group">
              <Link to="/wishlist" aria-label="Danh sách yêu thích" className="relative flex p-1 hover:text-red-600 transition-colors">
                <Heart className="h-5.5 w-5.5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                  {wishlistCount}
                </span>
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-stone-800 text-white text-[11px] font-medium px-2 py-1 rounded shadow-md whitespace-nowrap z-50">
                Yêu thích
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-stone-800"></div>
              </div>
            </div>

            {/* 4.3 ICON GIỎ HÀNG */}
            <div className="relative group">
              <Link to="/cart" aria-label="Giỏ hàng" className="relative flex p-1 hover:text-red-600 transition-colors">
                <ShoppingCart className="h-5.5 w-5.5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                  {cartItemsCount}
                </span>
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-stone-800 text-white text-[11px] font-medium px-2 py-1 rounded shadow-md whitespace-nowrap z-50">
                Giỏ hàng
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-stone-800"></div>
              </div>
            </div>

          </div>

        </div>
        
      </div>
    </header>
  );
}