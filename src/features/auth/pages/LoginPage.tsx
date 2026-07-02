import { Link } from "react-router-dom";

export function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-sm border border-stone-100">
        
        {/* Tiêu đề cố định vị trí */}
        <div className="flex justify-center items-center gap-4 border-b border-stone-200 pb-4 text-xl font-medium text-stone-400">
          <span className="text-stone-900 font-bold border-b-2 border-stone-900 pb-4 -mb-4">ĐĂNG NHẬP</span>
          <span className="text-stone-300">|</span>
          <Link to="/register" className="hover:text-stone-600 transition-colors">ĐĂNG KÝ</Link>
        </div>

        {/* Form nhập liệu */}
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">Email:</label>
            <input 
              type="email" 
              placeholder="Vui lòng nhập email của bạn" 
              className="w-full rounded bg-stone-100 border-transparent px-3 py-2.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-stone-400" 
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">Mật khẩu:</label>
            <input 
              type="password" 
              placeholder="Vui lòng nhập mật khẩu" 
              className="w-full rounded bg-stone-100 border-transparent px-3 py-2.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-stone-400" 
              required 
            />
          </div>

          {/* Nút Đăng nhập và Link phụ */}
          <div className="flex items-start gap-4 pt-2">
            <button 
              type="submit" 
              className="rounded bg-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors shrink-0"
            >
              ĐĂNG NHẬP
            </button>
            <div className="flex flex-col text-xs space-y-1">
              <span className="text-stone-500">
                Bạn chưa có tài khoản? <Link to="/register" className="text-blue-500 hover:underline">Đăng ký ngay</Link>
              </span>
              <span className="text-stone-500">
                Bạn quên mật khẩu? <Link to="/forgot-password" className="text-blue-500 hover:underline">Khôi phục mật khẩu</Link>
              </span>
            </div>
          </div>
        </form>

        {/* Đường kẻ và nút Google */}
        <div className="relative flex py-2 items-center">
          <div className="grow border-t border-stone-200"></div>
          <span className="shrink mx-4 text-xs text-stone-400">Hoặc đăng nhập nhanh:</span>
          <div className="grow border-t border-stone-200"></div>
        </div>

        <div>
          <button className="w-full flex items-center justify-center gap-2 bg-[#EA4335] text-white py-2.5 px-4 rounded text-sm font-medium hover:bg-[#d63b2f] transition-colors">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.986 0-.746-.08-1.32-.176-1.886H12.24z"/>
            </svg>
            Đăng nhập với Google
          </button>
        </div>

        <div className="border-t border-stone-100 pt-4 text-xs">
          <Link to="/" className="flex items-center gap-1 text-stone-500 hover:text-stone-800 transition-colors">
            <span>←</span> Quay lại trang chủ
          </Link>
        </div>

      </div>
    </div>
  );
}