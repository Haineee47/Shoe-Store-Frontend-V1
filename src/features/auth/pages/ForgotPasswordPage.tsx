import { Link, useNavigate } from "react-router-dom";

export function ForgotPasswordPage() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 1. Logic xử lý gọi API của Backend ở đây
      // await authService.forgotPassword(email);
      
      // 2. Sau khi API xử lý thành công, tự động quay lại trang đăng nhập
      // Bạn có thể thêm alert hoặc toast thông báo tại đây nếu cần
      navigate("/login");
    } catch (error) {
      console.error("Lỗi gửi email khôi phục:", error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-sm border border-stone-100">
        
        {/* Tiêu đề Đăng nhập | Đăng ký đồng bộ */}
        <div className="flex justify-center items-center gap-4 border-b border-stone-200 pb-4 text-xl font-medium text-stone-400">
          <Link to="/login" className="hover:text-stone-600 transition-colors">ĐĂNG NHẬP</Link>
          <span className="text-stone-300">|</span>
          <Link to="/register" className="hover:text-stone-600 transition-colors">ĐĂNG KÝ</Link>
        </div>

        {/* Tiêu đề phụ: Phục hồi mật khẩu */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-stone-900 tracking-tight">Phục hồi mật khẩu</h2>
        </div>

        {/* Form nhập liệu */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">Email:</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full rounded bg-stone-100 border-transparent px-3 py-2.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-stone-400" 
              required 
            />
          </div>

          {/* Điều khoản reCAPTCHA */}
          <p className="text-[10px] text-stone-400 leading-normal">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Terms of Service</a> apply.
          </p>

          {/* Nhóm nút điều hướng: GỬI và Hủy */}
          <div className="flex items-center gap-4 pt-2">
            <button 
              type="submit" 
              className="rounded bg-black text-white px-8 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors shrink-0"
            >
              GỬI
            </button>
            <Link 
              to="/login" 
              className="text-xs font-medium text-blue-500 hover:underline hover:text-blue-600 transition-colors"
            >
              Hủy
            </Link>
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