import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User } from "lucide-react";

export function AccountDropdown() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAccountOpen(false);
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleIconClick = () => {
    const currentPath = location.pathname;

    if (currentPath === "/login") {
      window.location.reload();
    } else if (currentPath === "/register") {
      setIsAccountOpen(!isAccountOpen);
    } else if (currentPath === "/forgot-password") {
      navigate("/login");
    } else {
      setIsAccountOpen(!isAccountOpen);
    }
  };

  return (
    <div className="relative flex justify-center" ref={dropdownRef}>
      {/* Icon kích hoạt */}
      <button 
        onClick={handleIconClick}
        className={`flex p-1 transition-colors outline-none ${
          isAccountOpen ? "text-red-600" : "hover:text-red-600"
        }`}
        aria-label="Tài khoản"
      >
        <User className="h-5.5 w-5.5" />
      </button>

      {/* Tooltip chữ "Tài khoản" khi Hover */}
      {!isAccountOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-stone-800 text-white text-[11px] font-medium px-2 py-1 rounded shadow-md whitespace-nowrap z-50">
          Tài khoản
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-stone-800"></div>
        </div>
      )}

      {/* ─── ĐÃ SỬA: Khung Dropdown Đăng nhập nhanh nằm GIỮA icon ─── */}
      {isAccountOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[52px] z-50 w-80 rounded-lg border border-stone-200 bg-white p-6 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* ─── ĐÃ SỬA: Mũi tên nhọn nằm GIỮA cân đối 2 bên ─── */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 border-l border-t border-stone-200 bg-white"></div>
          
          <div className="relative z-10 flex flex-col gap-4">
            
            {/* TẦNG 1: TIÊU ĐỀ & LỜI CHÀO */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-1">
                Đăng nhập tài khoản
              </h3>
              <p className="text-xs text-stone-500">
                Nhập email và mật khẩu của bạn:
              </p>
            </div>

            {/* TẦNG 2: FORM ĐĂNG NHẬP & BẢO MẬT */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full rounded border border-stone-300 px-3 py-2 text-sm outline-none transition-all focus:border-red-500" 
                required 
              />
              <input 
                type="password" 
                placeholder="Mật khẩu" 
                className="w-full rounded border border-stone-300 px-3 py-2 text-sm outline-none transition-all focus:border-red-500" 
                required 
              />
              
              <p className="text-[10px] text-stone-400 leading-normal pt-1">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Privacy Policy</a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Terms of Service</a>{" "}
                apply.
              </p>

              <button 
                type="submit" 
                className="w-full rounded bg-red-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-red-700 transition-colors mt-2"
              >
                Đăng nhập
              </button>
            </form>

            {/* TẦNG 3: LIÊN KẾT PHỤ ĐIỀU HƯỚNG */}
            <div className="flex items-center justify-between border-t border-stone-100 pt-3 text-xs">
              <Link 
                to="/register" 
                className="text-stone-600 hover:text-red-600 font-medium transition-colors" 
                onClick={() => setIsAccountOpen(false)} 
              >
                Tạo tài khoản
              </Link>
              <Link 
                to="/forgot-password" 
                className="text-stone-400 hover:text-red-600 transition-colors" 
                onClick={() => setIsAccountOpen(false)}
              >
                Khôi phục mật khẩu?
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}