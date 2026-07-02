import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, ClipboardList, MapPin, LogOut } from "lucide-react";

export function AccountPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate("/login"); // Đăng xuất xong đưa về trang login
  };

  // Nếu chưa có dữ liệu mock (đề phòng truy cập ẩn danh), hiển thị trạng thái trống
  if (!user) {
    return <div className="text-center py-20 text-stone-500">Không tìm thấy thông tin tài khoản.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* ─── SIDEBAR TRÁI ─── */}
        <div className="bg-stone-50 p-6 rounded-lg border border-stone-100 flex flex-col items-center text-center">
          {/* Avatar viết tắt */}
          <div className="w-24 h-24 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-sm">
            PH
          </div>
          <p className="text-sm text-stone-600 mb-6">
            Xin chào <span className="font-bold text-blue-600">{user.name}</span>
          </p>
          
          {/* Menu Điều Hướng Dọc */}
          <div className="w-full space-y-1 text-left text-xs font-medium text-stone-700">
            <button className="w-full flex items-center gap-2 px-3 py-2 bg-white rounded border border-stone-200 text-stone-900 font-bold">
              <User className="h-4 w-4 text-stone-500" /> Thông tin tài khoản
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded transition-colors">
              <ClipboardList className="h-4 w-4 text-stone-500" /> Quản lý đơn hàng
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded transition-colors">
              <MapPin className="h-4 w-4 text-stone-500" /> Danh sách địa chỉ
            </button>
            <button 
              onClick={handleLogoutClick}
              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-red-50 text-red-600 rounded transition-colors"
            >
              <LogOut className="h-4 w-4" /> Đăng xuất
            </button>
          </div>
        </div>

        {/* ─── NỘI DUNG CHÍNH PHẢI ─── */}
        <div className="md:col-span-3 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-100 pb-4">
            <h2 className="text-base font-bold uppercase tracking-wider text-stone-900">
              Thông tin tài khoản
            </h2>
            <button className="rounded bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-700 transition-colors shadow-sm">
              Cập nhật thông tin tài khoản
            </button>
          </div>

          {/* Chi tiết thông tin */}
          <div className="space-y-3 text-sm text-stone-600">
            <div className="grid grid-cols-3 max-w-md">
              <span className="text-stone-400">Họ và tên:</span>
              <span className="col-span-2 text-stone-900 font-medium">{user.name}</span>
            </div>
            <div className="grid grid-cols-3 max-w-md">
              <span className="text-stone-400">Email:</span>
              <span className="col-span-2 text-stone-900 font-medium">{user.email}</span>
            </div>
            <div className="grid grid-cols-3 max-w-md">
              <span className="text-stone-400">Địa chỉ:</span>
              <span className="col-span-2 text-stone-400 italic">{user.address}</span>
            </div>
            <div className="grid grid-cols-3 max-w-md">
              <span className="text-stone-400">Ngày sinh:</span>
              <span className="col-span-2 text-stone-900 font-medium">{user.birthday}</span>
            </div>
            <div className="grid grid-cols-3 max-w-md">
              <span className="text-stone-400">Điện thoại:</span>
              <span className="col-span-2 text-stone-900 font-medium">{user.phone}</span>
            </div>
          </div>

          {/* Banner hạng thẻ thành viên */}
          <div className="rounded-lg bg-blue-50/60 border border-blue-100/50 p-4 text-xs space-y-1">
            <p className="font-bold text-stone-800">
              Hạng thẻ tiếp theo Silver - chiết khấu 3% membership
            </p>
            <a href="#policy" className="inline-block text-blue-600 hover:underline">
              Xem thêm chính sách khách hàng thân thiết.
            </a>
          </div>

          {/* Footer danh sách dưới cùng */}
          <div className="border-t border-stone-200 pt-4">
            <p className="text-xs text-stone-400 italic">Dang cập nhật danh sách.</p>
          </div>
        </div>

      </div>
    </div>
  );
}