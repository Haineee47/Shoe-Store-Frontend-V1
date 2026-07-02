import { Link } from "react-router-dom";

export function RegisterPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic xử lý đăng ký (gọi API) sẽ viết ở đây
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-sm border border-stone-100">
        
        {/* Tiêu đề Đăng nhập | Đăng ký */}
        <div className="flex justify-center items-center gap-4 border-b border-stone-200 pb-4 text-xl font-medium text-stone-400">
          <Link to="/login" className="hover:text-stone-600 transition-colors">ĐĂNG NHẬP</Link>
          <span className="text-stone-300">|</span>
          <span className="text-stone-900 font-bold border-b-2 border-stone-900 pb-4 -mb-4">ĐĂNG KÝ</span>
        </div>

        {/* Form nhập liệu */}
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1">Họ:</label>
              <input type="text" placeholder="Họ" className="w-full rounded bg-stone-100 border-transparent px-3 py-2.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-stone-400" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1">Tên:</label>
              <input type="text" placeholder="Tên" className="w-full rounded bg-stone-100 border-transparent px-3 py-2.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-stone-400" required />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">Ngày sinh:</label>
            <input type="date" className="w-full rounded bg-stone-100 border-transparent px-3 py-2.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-stone-400" required />
          </div>

          {/* Ô chọn Giới tính (Nam / Nữ) */}
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-2">Giới tính:</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-stone-700 cursor-pointer group">
                <input 
                  type="radio" 
                  name="gender" 
                  value="female" 
                  className="h-4 w-4 accent-stone-900 cursor-pointer"  
                />
                <span className="group-hover:text-stone-900 transition-colors">Nữ</span>
              </label>
              
              <label className="flex items-center gap-2 text-sm text-stone-700 cursor-pointer group">
                <input 
                  type="radio" 
                  name="gender" 
                  value="male" 
                  className="h-4 w-4 accent-stone-900 cursor-pointer" 
                />
                <span className="group-hover:text-stone-900 transition-colors">Nam</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">Email:</label>
            <input type="email" placeholder="Email" className="w-full rounded bg-stone-100 border-transparent px-3 py-2.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-stone-400" required />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">Số điện thoại:</label>
            <input type="tel" placeholder="Số điện thoại" className="w-full rounded bg-stone-100 border-transparent px-3 py-2.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-stone-400" required />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">Mật khẩu:</label>
            <input type="password" placeholder="Mật khẩu" className="w-full rounded bg-stone-100 border-transparent px-3 py-2.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-stone-400" required />
          </div>

          {/* Điều khoản reCAPTCHA */}
          <p className="text-[10px] text-stone-400 leading-normal">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Terms of Service</a> apply.
          </p>

          {/* ĐÃ ĐỒNG BỘ: Cấu trúc vùng Nút Đăng ký và Link phụ */}
          <div className="flex items-start gap-4 pt-2">
            <button 
              type="submit" 
              className="rounded bg-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors shrink-0"
            >
              ĐĂNG KÝ
            </button>
            <div className="flex flex-col text-xs space-y-1">
              <span className="text-stone-500">
                Bạn đã có tài khoản? <Link to="/login" className="text-blue-500 hover:underline">Đăng nhập ngay</Link>
              </span>
            </div>
          </div>
        </form>

        {/* Nút quay lại trang chủ */}
        <div className="border-t border-stone-100 pt-4 text-xs">
          <Link to="/" className="flex items-center gap-1 text-stone-500 hover:text-stone-800 transition-colors">
            <span>←</span> Quay lại trang chủ
          </Link>
        </div>

      </div>
    </div>
  );
}